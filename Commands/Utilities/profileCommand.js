const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "profile",
    description: "Shows the profile pitcure of the specified target.",
    options: [
        {
            name: "target",
            description: "Select the target.",
            type: "USER",
            required: false
        }
    ],
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {

        const target = interaction.options.getMember("target") || interaction.member;
        await target.user.fetch();

        const profileEmbed = new MessageEmbed()

            .setImage(target.user.avatarURL({ dynamic: true, size: 512 }))

        interaction.reply({ embeds: [profileEmbed]})
    }
}