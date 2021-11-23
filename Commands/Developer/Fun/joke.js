const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "joke",
    description: "Gives you a joke.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     * @param { Client } client
     */
    async execute(interaction, client) {

        const url = "https://some-random-api.ml/joke";

        let data, response;

        try {
            response = await axios.get(url);
            data = response.data.joke;
        } catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const jokes = new MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(client.user.avatarURL({ dynamic: true, size: 512 }))
            .setTitle("Random Joke")
            .setDescription(`\`\`\`${data}\`\`\``)
        interaction.reply({ embeds: [jokes] });
    }
}