const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "panda",
    description: "Gives you a picture of a panda.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     */
    async execute(interaction) {

        const url = "https://some-random-api.ml/img/panda/";
        const urlfact = "https://some-random-api.ml/facts/panda";

        let data, response, responseFact, dataFact;

        try {
            response = await axios.get(url);
            data = response.data;
            responseFact = await axios.get(urlfact);
            dataFact = responseFact.data.fact;
        } catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const panda = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Random Panda")
            .setImage(data.link)

        const pandaFact = new MessageEmbed()
            .setColor(panda.hexColor)
            .setTitle("Random Panda Fact")
            .setDescription(`\`\`\`${dataFact}\`\`\``, true)

        await interaction.reply({ embeds: [panda, pandaFact] })
    }
}