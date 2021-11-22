const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const yoMamma = require('yo-mamma').default;

module.exports = {
    name: "yomama",
    description: "Gives you a random Chuck Norris joke.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     * @param { Client } client
     */
    async execute(interaction, client) {

        insult = yoMamma();

        const yoMamaJokes = new MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(client.user.avatarURL({ dynamic: true, size: 512 }))
            .setTitle("Random Yo Mama Joke")
            .setDescription(`<@${interaction.user.id}>\`\`\`${insult}\`\`\``)
        interaction.reply({ embeds: [yoMamaJokes] });

    }
}