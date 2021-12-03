const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "lyrics",
    description: "Gets the song lyrics",
    options: [
        {
            name: "songtitle",
            description: "Title of the song",
            type: "STRING",
            required: true,
        }
    ],

    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        

        const songTitle = interaction.options.getString('songtitle');

        const url = await axios.get(`https://some-random-api.ml/lyrics?title=${songTitle}`)

        const embed = new MessageEmbed()
        .setTitle("Song Finder")
        .setDescription(
            
            `**Author:** ${url.data.author}`
            +
            `\n\n`
            +
            `**Song Name:** ${url.data.title}`
            +
            `\n\n`
            +
            `**Lyrics:**\n\n\`\`\`${url.data.lyrics}\`\`\``
        
        )


        return interaction.reply({ embeds: [embed] });

    }
}