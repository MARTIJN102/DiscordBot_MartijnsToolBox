const {CommandInteraction, MessageEmbed} = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "hug",
    description: "select a target to hug.",
    options: [
        {
            name: "target",
            description: "please specify your target",
            type: "USER",
            required: true
        }
    ],

    /**
     * @param { CommandInteraction } interaction
     */

    async execute(interaction) {

        const Target = interaction.options.getMember('target');

        const url = await axios.get("https://some-random-api.ml/animu/hug")

        const hugEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Huggies for ${Target}`)
        .setImage(url.data.link)

        return interaction.reply({embeds: [hugEmbed]});

    }
}