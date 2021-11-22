const { Client, CommandInteraction, MessageEmbed } = require("discord.js")

module.exports = {
    name: "interactionCreate",

    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */

    async execute(interaction, client) {

        if (client.maintenance && interaction.user.id != "378618402169946112") {
            const Response = new MessageEmbed()
            .setTitle("👷‍♂️ MAINTENANCE 👷‍♂️")
            .setDescription("⛔ Sorry the bot will be back shortly when everything is working correctly. ⛔")
            .setTimestamp()
            .setColor("DARK_BUT_NOT_BLACK")

            return interaction.reply({embeds: [Response], ephemeral: true})
        }

        if(interaction.isCommand() || interaction.isContextMenu()) {
            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.reply({embeds: [
                new MessageEmbed()
                .setColor("RED")
                .setDescription("⛔ An error occured while running this command.")
            ]}) && client.commands.delete(interaction.commandName);

            command.execute(interaction, client)
        }
    }
}

// const { Client, CommandInteraction, MessageEmbed } = require("discord.js")
// const database = require("./../../database")

// module.exports = {
//     name: "interactionCreate",

//     /**
//      * 
//      * @param {CommandInteraction} interaction 
//      * @param {Client} client 
//      */

//     async execute(interaction, client) {
//         database.findOne({ enabled: true }, (err, data) => {
//             if (err) console.log(err)
//             if (data) {
//                 if (interaction.user.id != "378618402169946112") {
//                     const Response = new MessageEmbed()
//                         .setTitle("MAINTENANCE")
//                         .setDescription("Sorry the bot will be back shortly when everything is working correctly.")
//                         .setColor("DARK_BUT_NOT_BLACK")

//                     return interaction.reply({ embeds: [Response] })
//                 }
//             }
//         })

//         if (interaction.isCommand() || interaction.isContextMenu()) {
//             const command = client.commands.get(interaction.commandName);
//             if (!command) return interaction.reply({
//                 embeds: [
//                     new MessageEmbed()
//                         .setColor("RED")
//                         .setDescription("⛔ An error occured while running this command.")
//                 ]
//             }) && client.commands.delete(interaction.commandName);

//             command.execute(interaction, client)
//         }
//     }
// }