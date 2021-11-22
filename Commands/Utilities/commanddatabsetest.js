const database = require("../../database");

const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "pingg",
    description: "ping pong",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        database.findOne({ enabled: true }, (err, data) => {
            if (err) console.log(err)
            console.log(data.enabled)
        })
        // await new database({
        //     enabled: true
        // }).save();
        interaction.reply({ content: "PONG" });
    }
}