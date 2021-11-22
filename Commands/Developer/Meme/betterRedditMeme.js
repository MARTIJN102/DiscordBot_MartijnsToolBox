// const { CommandInteraction, MessageEmbed } = require("discord.js");
// const axios = require("axios");

// module.exports = {
//     name: "reddit",
//     description: "request a meme from reddit via subreddits.",
//     options: [
//         {name: "name",
//         description: "Provide a name of the subreddit.",
//         type: "STRING",
//         required: true}
//     ],
//     /**
//      * 
//      * @param {CommandInteraction} interaction 
//      */
//     async execute(interaction) {
//         const { options } = interaction;
//         const name = options.getString("name");
//         const meme = "https://meme-api.herokuapp.com/gimme/" + name;
//         let data, response;
//         try {
//             response = await axios.get(meme);
//             data = response.data;
//         } catch (e) {
//             const Response = new MessageEmbed()
//                 .setTitle("ERROR")
//                 .setColor("RED")
//                 .addField(`Subreddit does not exist:`, `\`\`\`${name}\`\`\``)
//             await interaction.reply({ embeds: [Response], fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) });
//         }
//         async function ResponseEmbed(){
//             const Response = new MessageEmbed()
//                 .setTitle(data.title)
//                 .setImage(data.url)
//             const message = await interaction.reply({ embeds: [Response], fetchReply: true });
//             message.react("🟢"); 
//             message.react("🔴");
//         }
//         if (data == null) return;
//         if(!data.nsfw || interaction.channel.nsfw && data.nsfw) return ResponseEmbed();
//         if(!interaction.channel.nsfw && data.nsfw) return interaction.reply("No NSFW allowed.\nGo to a channel where nsfw is enabled.");
//     }
// }

const { CommandInteraction, MessageEmbed }  = require("discord.js");
const axios                                 = require("axios");

module.exports = {
    name: "reddit",
    description: "Request a meme from reddit via subreddits.",
    options: [
        {
            name: "subreddit",
            description: "Provide a subreddit to fetch memes from.",
            type: "STRING",
            required: false
        }
    ],
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const subreddit = interaction.options.getString("subreddit") || "";

        try {
            const response = await axios.get(`https://meme-api.herokuapp.com/gimme/${subreddit}`);
            if (response.data.nsfw && !interaction.channel.nsfw)
                return interaction.reply({ content: "⛔ No **NSFW** content allowed in this channel ⛔\nGo to a channel where **NSFW** is *enabled*.", ephemeral: true });

            const meme = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(response.data.title)
                .setURL(response.data.postLink)
                .setImage(response.data.url)
                .setFooter(`Posted by ${response.data.author} in r/${response.data.subreddit} with ${response.data.ups} upvotes`)
                .setTimestamp();

            const reply = await interaction.reply({ embeds: [meme], fetchReply: true });
            reply.react("🟢");
            reply.react("🔴");
        } catch (error) {

            const errorEmbed = new MessageEmbed()
                .setTitle("🔍 Unable to find subreddit 🔎")
                .setColor("RED")
                .setDescription(`The **${subreddit}** subreddit does not exist.`)
                
            interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    }
}