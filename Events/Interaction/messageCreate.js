const { MessageEmbed, Client, GuildMember} = require('discord.js');
const { blacklistedWords } = require("../../Validation/BlackListedWords");
const axios = require('axios');

module.exports = {
    name: 'messageCreate',
    description: "Will activate when a message is created",
    /**
     * 
     * @param {Client} client
     * @param { GuildMember } member
     * @returns 
     */
    async execute(message, client, member) {
        if (message.author.bot) return;

        if (message.channel.type == 'DM' && message.content === "insult me"){

            const response = await axios.get(`https://evilinsult.com/generate_insult.php?lang=en&amp;type=json`);

            return message.reply({ content: `${response.data}` })
        }

        if (message.channel.type == 'DM') {

            const DM = message.content
            const dmUser = await client.users.cache.get("378618402169946112")
            const Response = await dmUser.createDM();
            const dmEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("DM Received")
            .setDescription(`DM made by: <@${message.author.id}>`)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
            .addField("Content", `\`\`\`${DM}\`\`\``)
            .setTimestamp()
            return Response.send({embeds: [dmEmbed]});

            // if (message.author.id == "529422449540988949"){
            //     return message.reply({content: "I love you"})
            // }
            // return message.reply("Fuck you.")

        }

        member = await message.guild.members.fetch(message.author.id);
        // if (member.permissions.has('ADMINISTRATOR')) return;

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

        if (client.blacklist){
            if (foundInText) {

                const Response = new MessageEmbed()
                .setTitle("AntiCurse")
                .setDescription(`You are not allowed to say that <@${message.author.id}>`)
                .setThumbnail(message.author.avatarURL({dynamic: true, size: 128}))
                .addField("Banned word:", `\`\`\`${stringf}\`\`\``)
                .setColor("RED")
                .setTimestamp()
                message.delete()
                message.channel.send({ embeds: [Response], fetchReply: true}).then(msg => { setTimeout(() => msg.delete(), 5000) })
            }
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