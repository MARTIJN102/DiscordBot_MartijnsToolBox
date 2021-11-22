// const { MessageEmbed } = require('discord.js');
// const { blacklistedWords } = require('../../Validation/BlackListedWords');

// module.exports = {
//     name: 'messageCreate',
//     description: "Will filter out all the words from the BlackListedWords list",

//     execute(message) {
//         if (message.author.bot) return;
//         if (blacklistedWords.includes(message.content)) {
//             message.delete();
//             message.channel.send({ content: `${message.author}, you cannot say that word!`, fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) })
//         }
//     },
// };

// let stringf = "";

const { MessageEmbed } = require('discord.js');
const { blacklistedWords } = require("../../Validation/BlackListedWords");
const { footer } = require("../../config.json");
// const { blacklistedWords } = require('../../Validation/BlackListedWords');

// function bannedWord(x)
// {
//     if(blacklistedWords.includes(x))
//     return blacklistedWords.indexOf(x)
// }

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
        // if (message.author.hasPermission("ATMINISTRATOR")) return;

        // const logChannel = client.channels.cache.find(channel => channel.id === "904458406566428713");
        // let words = ["fuck", "gay", "nigger", "slut", "bitch"]

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

        // let check = false;
        // let words = [];
        // const cWords = message.content.split(' ');

        // for (let cIndex = 0; cIndex < cWords.length; cIndex++) {
        //     const checkWord = cWords[cIndex];
        //     for (let bIndex = 0; bIndex < blacklistedWords.length; bIndex++) {
        //         const blackWord = blacklistedWords[bIndex];
        //         if (checkWord === blackWord) {
        //             words.push(`${checkWord}`);
        //             check = true;
        //         }
        //     }
        // }


        if (foundInText) {

            // const logEmbed = new MessageEmbed()
            // .setDescription(`<@${message.author.id}> Said a bad word!`)
            // .addField(`The message`, message.content)
            // .setColor("RANDOM")
            // .setTimestamp()
            // message.reply({embeds: [logEmbed]});

            const Response = new MessageEmbed()
            .setTitle("AntiCurse")
            .setDescription(`You are not allowed to say that <@${message.author.id}>`)
            .setThumbnail(message.author.avatarURL({dynamic: true, size: 128}))
            .addField("Banned word:", `\`\`\`${stringf}\`\`\``)   // should return word from ${blacklistedWords[i]}
            // .addField('Word(s):',`\`\`\`${words.join(', ')}\`\`\``)
            .setColor("RED")
            .setTimestamp()
            .setFooter(footer)
            message.delete()
            message.channel.send({ embeds: [Response], fetchReply: true}).then(msg => { setTimeout(() => msg.delete(), 5000) })
            // stringf = "";
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