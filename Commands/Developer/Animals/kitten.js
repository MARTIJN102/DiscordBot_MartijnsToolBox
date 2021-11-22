const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "kitten",
    description: "Gives you a picture of a kitten.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     */
    async execute(interaction) {

        const url = "https://some-random-api.ml/img/cat/";
        const urlfact = "https://some-random-api.ml/facts/cat";

        let data, response, responseFact, dataFact;

        try{
            response = await axios.get(url);
            data = response.data;
            responseFact = await axios.get(urlfact);
            dataFact = responseFact.data.fact;
        }catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const cat = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Random Kitten")
            .setImage(data.link)

        const catFact = new MessageEmbed()
            .setColor(cat.hexColor)
            .setTitle("Random Cat Fact")
            .setDescription(`\`\`\`${dataFact}\`\`\``, true)

        await interaction.reply({ embeds: [cat, catFact]}) //.then(msg => { setTimeout(() => msg.delete(), 10000) })
    }
}