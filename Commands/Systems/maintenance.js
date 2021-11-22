const { CommandInteraction, MessageEmbed } = require("discord.js");
// const database = require("./../../database");

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
        
        // interaction.reply({ content: "PONG" })

    //     let maintenanceMode = "";
    //     const enabledFilter = { enabled: true };
    //     const disable = { enabled: false };
    //     const disabledFilter = { enabled: false };
    //     const enable = { enabled: true };

    //     function maintenanceEnableDisable(){
    //         database.findOne({ enabled: true }, async (err, data) => {
    //             if (!data) {
    //                 maintenanceMode = await database.findOneAndUpdate(disabledFilter, enable);
    //                 maintenanceMode = await database.findOne(enabledFilter)
    //                 return interaction.reply({ content: `Maintenance Mode Enabled` })
    //             } else {
    //                 maintenanceMode = await database.findOneAndUpdate(enabledFilter, disable);
    //                 maintenanceMode = await database.findOne(disabledFilter)
    //                 return interaction.reply({ content: `Maintenance Mode Disabled` })
    //             }
    //         })
    //     }

    //     if (interaction.user.id == "378618402169946112") {
    //         maintenanceEnableDisable()
    //     }
    // }
    }
}