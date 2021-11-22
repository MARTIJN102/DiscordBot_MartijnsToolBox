const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "redditmeme",
    description: "Gives you a random reddit meme.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     */
    async execute(interaction) {

        const url = "https://api.darkboy.me/getmeme";

        let data, response;

        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return interaction.channel.send(`An error occured, please try again!`)
        }

        // const redditMeme = new MessageEmbed()
        //     .setColor("RANDOM")
        //     .setTitle(data.title)
        //     .setImage(data.image)
        //     .setFooter(`Meme by reddit user: ${data.author}`)
        //     .setTimestamp()

        // const message = await interaction.reply({ embeds: [redditMeme], fetchReply: true}) //.then(msg => { setTimeout(() => msg.delete(), 10000) })
        // message.react("🟢")
        // message.react("🔴")

        if (data.image.startsWith(`https://i`)){
            const redditMeme = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(data.title)
                .setImage(data.image)
                .setFooter(`Meme by reddit user: ${data.author}`)
                .setTimestamp()

            const message = await interaction.reply({ embeds: [redditMeme], fetchReply: true }) //.then(msg => { setTimeout(() => msg.delete(), 10000) })
            message.react("🟢")
            message.react("🔴")
        } else if (data.image.startsWith("https://v")){
            const redditMeme = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(data.title)
                .addField(`Reddit Video:`, data.image)
                .setFooter(`Meme by reddit user: ${data.author}`)
                .setTimestamp()

            const message = await interaction.reply({ embeds: [redditMeme], fetchReply: true }) //.then(msg => { setTimeout(() => msg.delete(), 10000) })
            message.react("🟢")
            message.react("🔴")
        }
    }
}