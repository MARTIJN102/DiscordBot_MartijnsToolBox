const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const giveMeAJoke = require('discord-jokes');

module.exports = {
    name: "dadjoke",
    description: "Gives you a random dad joke.",
    // permission: "ADMINISTRATOR",
    /**
     * 
     * @param { MessageEmbed } message
     * @param { CommandInteraction } interaction
     * @param { Client } client
     */
    async execute(interaction, client) {

        giveMeAJoke.getRandomDadJoke(function (joke) {

            const dadJokes = new MessageEmbed()
                .setColor("RANDOM")
                .setThumbnail(client.user.avatarURL({ dynamic: true, size: 512 }))
                .setTitle("Random Dad Joke")
                .setDescription(`\`\`\`${joke}\`\`\``)
            interaction.reply({ embeds: [dadJokes] });

        });

    }
}