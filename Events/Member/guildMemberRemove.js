const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js")

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;

        const Leave = new WebhookClient({
            id: "904543880127582249",
            token: "eZlh8aEoj4jgJ4rbLQQ1ffjQJxfK_KW_OS3ZDU7JdjlLK-dTjBkVnGfPJC3H0sym0SDw"
        });

        const ByeBye = new MessageEmbed()
            .setColor("RED")
            .setAuthor(user.tag, user.avatarURL({ dynamic: true, size: 512 }))
            .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
            .setDescription(`${member} has left the server.\nJoined: <t:${parseInt(member.joinedTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
            .setFooter(`ID: ${user.id}`)

        Leave.send({ embeds: [ByeBye] })
    }
}