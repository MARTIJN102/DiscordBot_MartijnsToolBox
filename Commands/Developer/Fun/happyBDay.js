const { MessageEmbed, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name:"bday",
    description: "Wishes specific member Happy Birthday in DM.",
    permission: "ADMINISTRATOR",
    /**
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction 
     * @param { Client } client 
     */
    execute(interaction, client){
        
        interaction.reply("Sending")
        setInterval(() => {
            const bdayEmbed = new MessageEmbed()
            .setTitle("LIAM")
            .setDescription("HAPPY BIRTHDAY")
            .setImage(client.user.avatarURL({ dynamic: true, size: 512 }))
        
            interaction.guild.members.cache.get('222435972946591747').send({embeds: [bdayEmbed]});
        }, 60000);

    }
}