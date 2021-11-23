const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "say",
    description: "Make the bot say anything you want.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "say",
            description: "Type whatever you want to say.",
            type: "STRING",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {

        interaction.reply({content: "Will do boss.", ephemeral: true})

        const say = interaction.options.getString("say");

        interaction.channel.send({content: `${say}`})

    }
}