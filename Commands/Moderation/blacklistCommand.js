const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "swearfilter",
    description: "Will activate swearfilter",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction, client) {

        if (!interaction.user.id == "378618402169946112") return interaction.reply({ content: "Not allowed." });

        if (client.blacklist) return client.blacklist = false, interaction.reply({ content: "Swearfilter Off" });

        client.blacklist = true;

        interaction.reply({ content: "Swearfilter On" })

    }
}