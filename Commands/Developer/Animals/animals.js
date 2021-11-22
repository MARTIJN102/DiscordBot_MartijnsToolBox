const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const { footer } = require("../../../config.json");

module.exports = {
    name: "animals",
    description: "Gives a list of available animal commands.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     * @param { Client } client
     */
    async execute(interaction, client) {
        const aEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL({ dynamic: true, size: 512 }))
        .setTitle("Random Animal Picture")
        .addField("Available Animals:", "\`\`\`/kitten\n/doggo\n/bird\n/fox\n/koala\n/panda\n/pandared\n/raccoon\n/kangaroo\`\`\`")
        .setTimestamp()
        .setFooter(footer)
        interaction.reply({ embeds: [aEmbed] });
    }
}