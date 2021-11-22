const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "clear",
    description: "Clears the amount of messages given.",
    permission: "MANAGE_MESSAGES",
    options: [
        {
            name: "amount",
            description: "Amount of messages you want to delete.",
            type: "NUMBER",
            required: true
        },
        {
            name: "target",
            description: "Select a target to clear their messages.",
            type: "USER",
            required: false
        }
    ],
    /**
     * 
     * @param {CommandInteracion} interaction 
     */
    async execute(interaction) {
        const { channel, options } = interaction;

        const Amount = options.getNumber("amount");
        const Target = options.getMember("target");

        // Code bye: KevinFoged 

        if (Amount <= 0) return interaction.reply("bro... you gotta give me more than 0.")
        if (Amount > 100) return interaction.reply("bro... chill, more than 100 is not allowed.")

        const Messages = await channel.messages.fetch();

        const Response = new MessageEmbed()
        .setColor("LUMINOUS_VIVID_PINK");

        if(Target) {
            let i = 0
            const filtered = [];
            (await Messages).filter((m) => {
                if(m.author.id === Target.id && Amount > i) {
                    filtered.push(m);
                    i++;
                }
            })

            await channel.bulkDelete(filtered, true).then(messages => {
                Response.setDescription(`🧹 Cleared ${messages.size} from ${Target}.`);
                interaction.reply({ embeds: [Response], fetchReply: true }).then(msg => {setTimeout(() => msg.delete(), 2500)})
            })
        } else {

            await channel.bulkDelete(Amount, true).then(messages => {
                Response.setDescription(`🧹 Cleared ${messages.size} from this channel.`);
                interaction.reply({ embeds: [Response], fetchReply: true }).then(msg => {setTimeout(() => msg.delete(), 2500)})
            })

        }
    }
}