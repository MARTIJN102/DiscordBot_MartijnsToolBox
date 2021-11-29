const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "encode",
    description: "Encode anything into binary or base64.",
    options: [
        {
            name: "binary",
            description: "encode anything to binary",
            type: "STRING",
            required: false
        },
        {
            name: "base64",
            description: "encode anything to base64",
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

        const BINARY = await axios.get(`https://some-random-api.ml/binary?encode=${Binary}`)
        const BASE64 = await axios.get(`https://some-random-api.ml/base64?encode=${Base64}`)



        if (Base64 == null) {

            const binaryEmbed = new MessageEmbed()
                .setColor("DARK_BUT_NOT_BLACK")
                .setTitle("Encoder")
                .addFields(
                    { name: "Decoded Format:", value: `\`\`\`${Binary}\`\`\`` },
                    { name: "Binary Encoded Format:", value: `\`\`\`${BINARY.data.binary}\`\`\`` }
                )
                .setTimestamp()

            return interaction.reply({ embeds: [binaryEmbed], ephemeral: true })
        }

        const base64Embed = new MessageEmbed()

            .setColor("DARK_BUT_NOT_BLACK")
            .setTitle("Encoder")
            .addFields(
                { name: "Decoded Format:", value: `\`\`\`${Base64}\`\`\`` },
                { name: "Base64 Encoded Format:", value: `\`\`\`${BASE64.data.base64}\`\`\`` }
            )
            .setTimestamp()
            
        interaction.reply({ embeds: [base64Embed], ephemeral: true })
    }
}