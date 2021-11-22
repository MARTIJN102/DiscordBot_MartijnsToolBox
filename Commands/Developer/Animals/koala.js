const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "koala",
    description: "Gives you a picture of a koala.",
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

        const url = "https://some-random-api.ml/img/koala/";
        const urlfact = "https://some-random-api.ml/facts/koala";

        let data, response, responseFact, dataFact;

        try {
            response = await axios.get(url);
            data = response.data;
            responseFact = await axios.get(urlfact);
            dataFact = responseFact.data.fact;
        } catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const koala = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Random Koala")
            .setImage(data.link)

        const koalaFact = new MessageEmbed()
            .setColor(koala.hexColor)
            .setTitle("Random Koala Fact")
            .setDescription(`\`\`\`${dataFact}\`\`\``, true)

        await interaction.reply({ embeds: [koala, koalaFact] }) //.then(msg => { setTimeout(() => msg.delete(), 10000) })
    }
}