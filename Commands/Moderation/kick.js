const { CommandInteraction, MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "kick",
    description: "Kick a specific member from the discord.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "target",
            description: "Select a target to ban.",
            type: "USER",
            required: true,
        },
        {
            name: "reason",
            description: "Provide a reason for this ban.",
            type: "STRING",
            required: true,
        },
    ],
    /**
     * 
     * @param { CommandInteraction } interaction 
     */
    async execute(interaction) {

        const Target = interaction.options.getMember('target') || interaction.member;
        await Target.user.fetch();

        if (Target.id === interaction.member.id)
            return interaction.reply({ embeds: [new MessageEmbed().setColor("RED").setDescription(`⛔ You cannot kick yourself.`)], fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) });

        if (Target.permissions.has("ADMINISTRATOR"))
            return interaction.reply({ embeds: [new MessageEmbed().setColor("RED").setDescription(`⛔ You cannot kick an Administrator.`)], fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) });

        const Reason = interaction.options.getString('reason');

        if (Reason.length > 512)
            return interaction.reply({ embeds: [new MessageEmbed().setColor("RED").setDescription(`⛔ The reason cannot exceed 512 characters`)], fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) });


        Target.kick({ reason: Reason })

        const Response = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`✅ **${Target.user.username}** has been kicked.`)
        interaction.reply({ embeds: [Response], fetchReply: true}).then(msg => { setTimeout(() => msg.delete(), 5000) });
    }
}