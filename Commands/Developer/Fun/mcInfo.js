const {CommandInteraction, MessageEmbed} = require("discord.js");
const axios = require("axios");

module.exports = {
    name:"mcinfo",
    description: "get data from a minecraft username.",
    options: [
        {
            name: "target",
            description: "specify the player name",
            type: "STRING",
            required: true
        }
    ],

    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {

        const Target = interaction.options.getString("target");

        const response = await axios.get(`https://some-random-api.ml/mc?username=${Target}`)

        let name = response.data.username
        let uuid = response.data.uuid
        let name_history = response.data.name_history.map(x => x.name + " || " + x.changedToAt + "\n").join("")


        const mcEmbed = new MessageEmbed() 
        .setTitle("Minecraft Account Information")
        .addFields(
            {name: "Current Name:", value: `\`\`\`${name}\`\`\``},
            {name: "UUID", value: `\`\`\`${uuid}\`\`\``},
            {name: "Name History:", value: `\`\`\`${name_history}\`\`\``}
        )
        interaction.reply({embeds: [mcEmbed], ephemeral: true});

    }
}