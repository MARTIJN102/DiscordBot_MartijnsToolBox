const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const giveMeAJoke = require('discord-jokes');

module.exports = {
    name: "jcjoke",
    description: "Gives you a picture of a red panda.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     * @param { Client } client
     */
    async execute(interaction, client) {

        const fn = "Jackie";
        const ln = "Chan";
        giveMeAJoke.getCustomJoke(fn, ln, function (joke) {

            const cnJokes = new MessageEmbed()
                .setColor("RANDOM")
                .setThumbnail(client.user.avatarURL({ dynamic: true, size: 512 }))
                .setTitle("Random Jackie Chan Joke")
                .setDescription(`\`\`\`${joke}\`\`\``)
            interaction.reply({ embeds: [cnJokes] });

        });

    }
}