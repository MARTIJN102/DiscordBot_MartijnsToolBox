const { MessageEmbed, Message, WebhookClient } = require("discord.js");

module.exports = {
    name: "messageDelete",
    /**
     * @param { Message } message
     */
    execute(message) {
        if(message.author.bot) return;

        const Log = new MessageEmbed()
        .setColor("RED")
        .setDescription(`📕 A [message](${message.url}) by <@${message.author.id}> was **Deleted**.\n
        **Deleted Message:**\n \`\`\`${message.content ? message.content : "None"}\`\`\``.slice(0, 4096))

        if(message.attachments.size >= 1){
            Log.addField(`Attachments:`, `${message.attachments.map(a => a.url)}`, true)
        }

        new WebhookClient({ url: "https://discord.com/api/webhooks/906509625183043604/j-_yjdPsE7qfIpjv_TENwaqBnje6u3tpKv2_-prOkQgecwlR8IAyI7oSi23ojSM5UzaE" }
        ).send({ embeds: [Log] }).catch((err) => console.log(err));
    }
}