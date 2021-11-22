const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "mean",
    description: "mad woman",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction, client) {
            
        if (!interaction.user.id == "378618402169946112") return interaction.reply({content: "Not allowed."});

        if (client.meanWoman) return client.meanWoman = false, interaction.reply({content: "Woman Block Off"});

        client.meanWoman = true;

        interaction.reply({content: "Woman Block On"})

    }
}