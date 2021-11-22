const { MessageEmbed } = require('discord.js');
const { blacklistedWords } = require("../../Validation/BlackListedWords");
const { footer } = require("../../config.json");

module.exports = {
    name: 'messageCreate',
    description: "Will filter out all the words from the BlackListedWords list",
    /**
     * 
     * @param {MessageEmbed} message 
     * @returns 
     */
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') {
            message.reply("You are DMing me now!");
        }
        member = await message.guild.members.fetch(message.author.id);
        if (member.permissions.has('ADMINISTRATOR')) return;

        let foundInText = false;
        for (let i = 0; i < blacklistedWords.length; i++) {
            if (message.content.toLowerCase().includes(blacklistedWords[i].toLowerCase())) {
                foundInText = true;
                (function(index){
                let temp = index;
                stringf = blacklistedWords[temp];
                
                })(i);
            }
        }

        if (foundInText) {

            const Response = new MessageEmbed()
            .setTitle("AntiCurse")
            .setDescription(`You are not allowed to say that <@${message.author.id}>`)
            .setThumbnail(message.author.avatarURL({dynamic: true, size: 128}))
            .addField("Banned word:", `\`\`\`${stringf}\`\`\``)
            .setColor("RED")
            .setTimestamp()
            .setFooter(footer)
            message.delete()
            message.channel.send({ embeds: [Response], fetchReply: true}).then(msg => { setTimeout(() => msg.delete(), 5000) })
        }

        if(client.meanWoman){
            if (message.author.id == "529422449540988949")
            {
                const myWoman = new MessageEmbed()
                .setTitle('**BEEN MEAN**')
                .setColor("RED")
                .setDescription(`No <@${message.author.id}>`)
                .addField("Reason you can't speak:", "\`\`\`You were mean.\`\`\`")
                message.delete()
                message.channel.send({ embeds: [myWoman], fetchReply: true}).then(msg => { setTimeout(() => msg.delete(), 10000) })
            }
        }

    }
};