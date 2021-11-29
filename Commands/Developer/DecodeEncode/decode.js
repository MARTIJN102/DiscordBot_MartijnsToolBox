const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "decode",
    description: "Decode anything from binary and base64.",
    options: [
        {
            name: "binary",
            description: "decode anything from binary",
            type: "STRING",
            required: false
        },
        {
            name: "base64",
            description: "decode anything from base64",
            type: "STRING",
            required: false
        }
    ],

    /**
     * @param { CommandInteraction } interaction
     */

    async execute(interaction) {

        const Binary = interaction.options.getString("binary");
        const Base64 = interaction.options.getString("base64");

        const BINARY = await axios.get(`https://some-random-api.ml/binary?decode=${Binary}`)
        const BASE64 = await axios.get(`https://some-random-api.ml/base64?decode=${Base64}`)



        if (Base64 == null) {

            const binaryEmbed = new MessageEmbed()
                .setColor("DARK_BUT_NOT_BLACK")
                .setTitle("Decode")
                .addFields(
                    {name: "Decoded:", value: `\`\`\`${BINARY.data.text}\`\`\``}
                )
                .setTimestamp()

            return interaction.reply({embeds: [binaryEmbed], ephemeral: true})
        }

        const base64Embed = new MessageEmbed()

            .setColor("DARK_BUT_NOT_BLACK")
            .setTitle("Decode")
            .addFields(
                { name: "Decoded:", value: `\`\`\`${BASE64.data.text}\`\`\`` }
            )
            .setTimestamp()

        interaction.reply({embeds: [base64Embed], ephemeral: true})
    }
}