const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "suggest",
    description: "Create a suggestions in an organized matter.",
    options: [
        {
            name: "type",
            description: "Sellect a type.",
            required: true,
            type: "STRING",
            choices: [
                {
                    name: "Command",
                    value: "Command"
                },
                {
                    name: "Event",
                    value: "Event"
                },
                {
                    name: "System",
                    value: "System"
                }
            ]
        },
        {
            name: "name",
            description: "Provide a name for your suggestion.",
            type: "STRING",
            required: true
        },
        {
            name: "functionality",
            description: "Describe the functionality of the suggestion.",
            type: "STRING",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {GuildMember} member
     */
    async execute(interaction){
        const { options } = interaction;

        const type = options.getString("type");
        const name = options.getString("name");
        const funcs = options.getString("functionality");

        const Response = new MessageEmbed()
        .setColor("GOLD")
        .setThumbnail(interaction.user.avatarURL({ dynamic: true, size: 512 }))
        .setDescription(`${interaction.member} has suggested ${type}.`)
        .addField("Name:",` ${name}`, true)
        .addField(`Functionality`, `${funcs}`, true)
        .setTimestamp()
        const message = await interaction.reply({embeds: [Response], fetchReply: true})
        message.react("🟢")
        message.react("🔴")
    }   
}