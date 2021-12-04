const { Client, MessageEmbed, CommandInteraction } = require("discord.js")
const mongoose = require("mongoose")
const { Database } = require("../../config.json")
const axios = require("axios")

module.exports = {
    name: "ready",
    once: true,
    /**
    * @param {CommandInteraction} interaction
    * @param {Client} client
    */
    execute(interaction, client) {
        console.log("The bot is now ready")

        setInterval(() => {
            if (client.maintenance) {
                client.user.setStatus("dnd");
                client.user.setActivity("Maintenance", { type: "WATCHING" });
                return
            }
            if (!client.maintenance) {
                client.user.setStatus("online");
                client.user.setActivity("kids", { type: "WATCHING" });
            }
        }, 30000);

       if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("The bot is now connected to the database!")
        }).catch((err) => {
            console.log(err)
        })
    }
}