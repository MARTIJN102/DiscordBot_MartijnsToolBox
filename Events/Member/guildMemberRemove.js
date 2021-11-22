const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js")
const { guildMemberRemove } = require("../../config.json");

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;

        const Leave = new WebhookClient({
            url : guildMemberRemove
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