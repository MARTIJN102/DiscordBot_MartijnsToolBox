const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const giveMeAJoke = require('discord-jokes');

module.exports = {
    name: "cnjoke",
    description: "Gives you a random Chuck Norris joke.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     * @param { Client } client
     */
    async execute(interaction, client) {

        giveMeAJoke.getRandomCNJoke(function (joke) {

            const cnJokes = new MessageEmbed()
                .setColor("RANDOM")
                .setThumbnail(client.user.avatarURL({ dynamic: true, size: 512 }))
                .setTitle("Random Chuck Norris Joke")
                .setDescription(`\`\`\`${joke}\`\`\``)
            interaction.reply({ embeds: [cnJokes] });

        });

    }
}