const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "bird",
    description: "Gives you a picture of a bird.",
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

        const url = "https://some-random-api.ml/img/bird/";
        const urlfact = "https://some-random-api.ml/facts/bird";

        let data, response, responseFact, dataFact;

        try {
            response = await axios.get(url);
            data = response.data.link;
            responseFact = await axios.get(urlfact);
            dataFact = responseFact.data.fact;
        } catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        const bird = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Random Bird")
            .setImage(data, true)

        const birdFact = new MessageEmbed()
            .setColor(bird.hexColor)
            .setTitle("Random Bird Fact")
            .setDescription(`\`\`\`${dataFact}\`\`\``, true)

        await interaction.reply({ embeds: [bird, birdFact]}) //.then(msg => { setTimeout(() => msg.delete(), 10000) })
        
    }
}