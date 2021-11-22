const { Client, Collection } = require('discord.js');
const client = new Client({intents: 32767});
const { token } = require('./config.json');

client.commands = new Collection();

client.maintenance = false;

client.meanWoman = false;

const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddSongWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin]
});
module.exports = client;


require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);

client.login(token);

// const database = require("./database");

// database.findOne({ enabled: true }, (err, data) => {
//     if (err) console.log(err)
//     if (data) {
//         client.maintenance = true
//     } else {
//         client.maintenance = false
//     }
// })

// ["Events", "Commands"].forEach(handler => {
//     require(`./Handlers/${handler}`)(client, PG, Ascii);
// });

// const { MessageEmbed, CommandInteraction, Client } = require("discord.js");

// module.exports = {
//     name: "girlfriend",
//     description: "Wishes specific member Happy Birthday in DM.",
//     permission: "ADMINISTRATOR",
//     /**
//      * @param { MessageEmbed } message
//      * @param { CommandInteraction } interaction 
//      * @param { Client } client 
//      */
//     execute(interaction, client) {

//         interaction.reply("Sending")
//         const member = interaction.guild.members.cache.get('529422449540988949')

//         setInterval(() => {
//             const girlfriendEmbed = new MessageEmbed()
//                 .setTitle(`My baby`)
//                 .setColor("GREEN")
//                 .setDescription(`${member}, I love you 😘❤`)
//                 .setImage(client.user.avatarURL({ dynamic: true, size: 512 }))
//                 .setFooter("Boobies")

//             member.send({ embeds: [girlfriendEmbed] });
//         }, 60000);

//     }
// }