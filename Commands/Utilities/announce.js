const { CommandInteraction, MessageEmbed, WebhookClient } = require("discord.js");
const { announce } = require("../../config.json");

module.exports = {
    name: "announce",
    description: "Announces whatever you want to announce in the announcement channel.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "title",
            description: "Provide the title of what you want to announce.",
            type: "STRING",
            required: true
        },
        {
            name: "information",
            description: "Provide the information that you want to announce.",
            type: "STRING",
            required: true
        },
        {
            name: "color",
            description: "The color of the announcement you want to make.",
            type: "STRING",
            required: true,
            choices: [
                { name: "green", value: "GREEN" },
                { name: "red", value: "RED" }
            ]
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        
        interaction.reply({content: "Sending announcement..."})

        const announcer = new WebhookClient({
            url : announce
        });

        const title = interaction.options.getString("title");
        const info = interaction.options.getString("information");
        const color = interaction.options.getString("color");

        const announcement = new MessageEmbed()
        .setTitle(`${title}`)
        .setColor(`${color}`)   
        .setDescription(`${info}`)
        .addField("Announced by:", `<@${interaction.user.id}>`)
        .setThumbnail(interaction.user.avatarURL({ dynamic: true, size: 512 }))
        .setTimestamp()

        announcer.send({embeds: [announcement]})

    }
}