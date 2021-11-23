const { CommandInteraction } = require('discord.js');
const insulter = require('insult');

module.exports = {
    name: "insult",
    description: "Insults the specific player you mention",
    options: [
        {
            name: "target",
            description: "Select a target to insult.",
            type: "USER",
            required: true,
        }
    ],
    /**
     * @param { CommandInteraction } interaction
     */
    execute(interaction) {

        const Target = interaction.options.getMember('target') || interaction.member;
        const insult = insulter.Insult();

        interaction.reply({ content: `${Target}, ${insult}`})
    }
}