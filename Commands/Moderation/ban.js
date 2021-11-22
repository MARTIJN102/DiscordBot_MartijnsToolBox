const { CommandInteraction, MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Ban a specific member from the discord.",
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
        {
            name: "messages",
            description: "Choose one of the choices",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "Don't delete any",
                    value: "0"
                },
                {
                    name: "Previous 7 days",
                    value: "7"
                }
            ]
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
            return interaction.reply({ embeds: [new MessageEmbed().setColor("RED").setDescription(`⛔ You cannot ban yourself.`)], fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) });

        if (Target.permissions.has("ADMINISTRATOR"))
            return interaction.reply({ embeds: [new MessageEmbed().setColor("RED").setDescription(`⛔ You cannot ban an Administrator.`)], fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) });
        
        const Reason = interaction.options.getString('reason');

        if (Reason.length > 512)
            return interaction.reply({ embeds: [new MessageEmbed().setColor("RED").setDescription(`⛔ The reason cannot exceed 512 characters`)], fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) });

        const Amount = interaction.options.getString('messages');


        Target.ban({days: Amount, reason: Reason})
        
        const Response = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`✅ **${Target.user.username}** has been banned.`)
        interaction.reply({ embeds: [Response], fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) });
        // setTimeout(() => message.delete().catch(() => { }), 2500);
    }
}