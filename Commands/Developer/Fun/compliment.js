const { CommandInteraction } = require('discord.js');
const InsultCompliment = require("insult-compliment");

module.exports = {
    name: "compliment",
    description: "Compliments the specific player you mention",
    options: [
        {
            name: "target",
            description: "Select a target to compliment.",
            type: "USER",
            required: true,
        }
    ],
    /**
     * @param { CommandInteraction } interaction
     */
    execute(interaction) {

        const Target = interaction.options.getMember('target') || interaction.member;
        const compliment = InsultCompliment.Compliment();

        interaction.reply({ content: `${Target}, ${compliment}` })
    }
}