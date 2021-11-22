const { MessageEmbed } = require('discord.js');
const { blacklistedWords } = require('../../Validation/BlackListedWords');

module.exports = {
    name: 'messageCreate',
    description: "Will filter out all the words from the BlackListedWords list",

    execute(message) {
        if (message.author.bot) return;
        if (blacklistedWords.includes(message.content)) {
            message.delete();
            message.channel.send({
                content: `${message.author}, you cannot say that word!`,
            });
        }
    },
};