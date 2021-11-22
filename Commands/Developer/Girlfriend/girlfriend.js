const { MessageEmbed, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "girlfriend",
    description: "Wishes specific member Happy Birthday in DM.",
    permission: "ADMINISTRATOR",
    /**
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction 
     * @param { Client } client 
     */
    execute(interaction, client) {

        interaction.reply("Sending")
        const member = interaction.guild.members.cache.get('529422449540988949')

        setInterval(() => {
            const girlfriendEmbed = new MessageEmbed()
                .setTitle(`My woman`)
                .setColor("GREEN")
                .setDescription(`${member}, I love you 😘❤`)
                .setImage(client.user.avatarURL({ dynamic: true, size: 512 }))
                .setFooter("Boobies")

            member.send({ embeds: [girlfriendEmbed] });
        }, 60000);

    }
}