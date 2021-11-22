const { MessageEmbed, Message, WebhookClient } = require("discord.js");
const { messageUpdateAndDelete } = require("../../config.json")

module.exports = {
    name: "messageUpdate",
    /**
     * 
     * @param {Message} oldMessage 
     * @param {Message} newMessage 
     */
    execute(oldMessage, newMessage){
        if(oldMessage.author.bot) return; // Ignore messages by bots

        if(oldMessage.content === newMessage.content) return;

        const Count = 1950;

        const Original = oldMessage.content.slice(0, Count) + (oldMessage.content.length > Count ? " ..." : "")
        const Edited = newMessage.content.slice(0, Count) + (newMessage.content.length > Count ? " ..." : "")

        const Log = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`📘 A [message](${newMessage.url}) by ${newMessage.author} was **edited** in ${newMessage.channel}.\n
        **Original:**\n \`\`\`${Original}\`\`\` \n**Edited:**\n\`\`\`${Edited}\`\`\``)

        new WebhookClient({ url: messageUpdateAndDelete}
        ).send({embeds: [Log]}).catch((err) => console.log(err));

    }
}