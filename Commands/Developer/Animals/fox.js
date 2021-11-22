const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "fox",
    description: "Gives you a picture of a fox.",
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

        const url = "https://some-random-api.ml/img/fox/";
        const urlfact = "https://some-random-api.ml/facts/fox";

        let data, response, responseFact, dataFact;

        try {
            response = await axios.get(url);
            data = response.data;
            responseFact = await axios.get(urlfact);
            dataFact = responseFact.data.fact;
        } catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const fox = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Random Fox")
            .setImage(data.link)

        const foxFact = new MessageEmbed()
            .setColor(fox.hexColor)
            .setTitle("Random Fox Fact")
            .setDescription(`\`\`\`${dataFact}\`\`\``, true)

        await interaction.reply({ embeds: [fox, foxFact] }) //.then(msg => { setTimeout(() => msg.delete(), 10000) })
    }
}