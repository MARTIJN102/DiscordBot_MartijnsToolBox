const { ContextMenuInteraction, MessageEmbed } = require("discord.js");
const { footer } = require("../../config.json");

module.exports = {
    name: "userinfo",
    type: "USER",

    /**
     * 
     * @param {ContextMenuInteraction} interaction
     */

    async execute(interaction) {
        const target = await interaction.guild.members.fetch(interaction.targetId);

        const Response = new MessageEmbed()
        .setColor("AQUA")
        .setAuthor(target.user.tag, target.user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(target.user.avatarURL({dynamic: true, size: 512}))
        .addField("ID", `${target.user.id}`, true)
        .addField("Roles", `${target.roles.cache.map(r => r).join(" ").replace("@everyone", " ") || "None"}`)
        .addField("Server Member Since", `<t:${parseInt(target.joinedTimestamp / 1000)}:F>`, true)
        .addField("Discord User Since", `<t:${parseInt(target.user.createdTimestamp / 1000)}:F>`, true)
        .setFooter(footer)
        .setTimestamp()

        return interaction.reply({embeds: [Response], ephemeral: true})

    }

}