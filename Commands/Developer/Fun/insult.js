const { CommandInteraction } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "insult",
    description: "Insults a person.",
    options: [
        {
            name: "target",
            description: "Select a target to insult.",
            type: "USER",
            required: true,
        }
    ],
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {

        const response = await axios.get(`https://evilinsult.com/generate_insult.php?lang=en&amp;type=json`);
        const Target = interaction.options.getMember('target');

        interaction.reply({ content: `${Target}, ${response.data}` })
    }
}