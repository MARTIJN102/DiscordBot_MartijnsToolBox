const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "kangaroo",
    description: "Gives you a picture of a kangaroo.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     */
    async execute(interaction) {

        const url = "https://some-random-api.ml/img/kangaroo/";

        let data, response;

        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const kangaroo = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Random Kangaroo")
            .setImage(data.link)

        await interaction.reply({ embeds: [kangaroo] })
    }
}