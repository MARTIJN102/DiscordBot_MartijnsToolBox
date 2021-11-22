const { MessageEmbed, Message, WebhookClient } = require("discord.js");
const { messageUpdateAndDelete } = require("../../config.json");

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

        new WebhookClient({ url: messageUpdateAndDelete }
        ).send({ embeds: [Log] }).catch((err) => console.log(err));
    }
}