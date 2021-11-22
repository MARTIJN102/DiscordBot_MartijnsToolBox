const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "maintenance",
    description: "Only for bot owner.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction, client) {



        if (!client.maintenance && interaction.user.id == "378618402169946112") {
            
            client.maintenance = true;
            
            const bot = new MessageEmbed()
                .setColor("GREEN")
                .setTitle("Maintenance mode **enabled** ✅")
                .setDescription(`👷‍♂️ The bot has been put into maintenance mode. 👷‍♂️`)
                
            return interaction.reply({ embeds: [bot], ephemeral: true});

        }

        if (client.maintenance && interaction.user.id == "378618402169946112"){
            
            client.maintenance = false;

            const bot = new MessageEmbed()
                .setColor("GREEN")
                .setTitle("Maintenance mode **disabled** ⛔")
                .setDescription(`👷‍♂️ The bot has been taken out of maintenance mode. 👷‍♂️`)

            return interaction.reply({ embeds: [bot], ephemeral: true });

        }
        
        const Response = new MessageEmbed()
            .setColor("RED")
            .setTitle("⛔ ERROR ⛔")
            .setDescription("Only the owner of the bot can perform this command.")
        return interaction.reply({ embeds: [Response], ephemeral: true});
    }
}