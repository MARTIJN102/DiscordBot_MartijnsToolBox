const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "automeme",
    description: "Request a meme from reddit via subreddits.",

    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction, client) {
        
        if(client.AutoMeme) return client.AutoMeme = false, interaction.reply("Auto Meme has been turned off")
        
        client.AutoMeme = true;
        
        setInterval(() => {

            if (client.AutoMeme) {
                async function autoMemeFunc() {

                    const response = await axios.get(`https://meme-api.herokuapp.com/gimme/${""}`);
                    if (response.data.nsfw && !interaction.channel.nsfw)
                        return interaction.channel.send({ content: "Oh no... I should not post this.", ephemeral: true });

                    const meme = new MessageEmbed()
                        .setColor("RANDOM")
                        .setTitle(response.data.title)
                        .setURL(response.data.postLink)
                        .setImage(response.data.url)
                        .setFooter(`Posted by ${response.data.author} in r/${response.data.subreddit} with ${response.data.ups} upvotes`)
                        .setTimestamp();

                    return await interaction.channel.send({ embeds: [meme], fetchReply: true });
                }

                autoMemeFunc()

            }

        }, 60000);

        return interaction.reply("Auto Meme has been turned on.")
    }
}