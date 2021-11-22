const { MessageEmbed, Message, webhookClient, WebhookClient } = require("discord.js");

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

        new WebhookClient({ url: "https://discord.com/api/webhooks/906509625183043604/j-_yjdPsE7qfIpjv_TENwaqBnje6u3tpKv2_-prOkQgecwlR8IAyI7oSi23ojSM5UzaE"}
        ).send({embeds: [Log]}).catch((err) => console.log(err));

    }
}