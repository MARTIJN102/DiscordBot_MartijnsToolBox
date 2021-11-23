const { Client } = require("discord.js")
const mongoose = require("mongoose")
const { Database } = require("../../config.json")

module.exports = {
    name: "ready",
    once: true,
    /**
    * @param {Client} client
    */
    execute(client) {
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