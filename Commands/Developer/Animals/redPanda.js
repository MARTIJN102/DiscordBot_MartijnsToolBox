const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "pandared",
    description: "Gives you a picture of a red panda.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     */
    async execute(interaction) {
        // const kitten = new MessageEmbed()
        // .setTitle("Kitten")

        // interaction.reply({embeds: [kitten], fetchReply: true, ephemeral: true }).then(msg => {setTimeout(() => msg.delete(), 5000) })

        const url = "https://some-random-api.ml/img/red_panda/";

        let data, response;

        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const redpanda = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Random Red Panda")
            .setImage(data.link)

        await interaction.reply({ embeds: [redpanda] }) //.then(msg => { setTimeout(() => msg.delete(), 10000) })
    }
}