const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const { footer } = require("../../config.json");

module.exports = {
    name: "serverinfo",
    description: "Gives you information about the server.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     * @param { Client } client
     */
    async execute(interaction, client) {
        const Response = new MessageEmbed()
        .setTitle(interaction.guild.name)
        .setDescription(`${interaction.guild.name} was made by Realm, the server is really\njust meant as a talk/game server.`)
        .setThumbnail(client.user.avatarURL({ dynamic: true, size: 512 }))
        .addField("Member Count:", `${interaction.guild.memberCount}`)
        .addField(`Amount of Roles: ${interaction.guild.roles.cache.size}`, `${interaction.guild.roles.cache.map(r => r).join(" ").replace("@everyone", " ") || "None"}`)      // what promise..?
        .setFooter(footer)

        interaction.reply({embeds: [Response]})
    }
}