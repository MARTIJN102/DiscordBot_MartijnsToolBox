const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js")
const { guildMemberAdd } = require("../../config.json");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;

        member.roles.add("752519691976573008");
        
        const Welcomer = new WebhookClient({
            url : guildMemberAdd
        });

        const Welcome = new MessageEmbed()
        .setColor("AQUA")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
        .setDescription(`
        Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\n
        Latest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Welcomer.send({embeds: [Welcome]})
    }
}