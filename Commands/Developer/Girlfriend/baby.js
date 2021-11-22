const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "baby",
    description: "Only to use for my woman :)",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        if (interaction.user.id == !"529422449540988949") return interaction.reply({content: "No, fuck you.", ephemeral: true});
        
        const myWoman = new MessageEmbed()
        .setColor("GREEN")
        .setTitle("To my woman")
        .setDescription(`I LOVE YOU <@529422449540988949>`)
        return interaction.reply({ embeds: [myWoman], ephemeral: true })
        
        // interaction.reply({ content: "PONG" })
    }
}