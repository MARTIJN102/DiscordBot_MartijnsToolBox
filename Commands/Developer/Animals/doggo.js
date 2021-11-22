const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "doggo",
    description: "Gives you a picture of a dog.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     */
    async execute(interaction) {

        const url = "https://some-random-api.ml/img/dog/";
        const urlfact = "https://some-random-api.ml/facts/dog";

        let data, response, responseFact, dataFact;

        try {
            response = await axios.get(url);
            data = response.data;
            responseFact = await axios.get(urlfact);
            dataFact = responseFact.data.fact;
        } catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const doggo = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Random Doggo")
            .setImage(data.link)

        const dogFact = new MessageEmbed()
            .setColor(doggo.hexColor)
            .setTitle("Random Dog Fact")
            .setDescription(`\`\`\`${dataFact}\`\`\``, true)

        await interaction.reply({ embeds: [doggo, dogFact] })
    }
}