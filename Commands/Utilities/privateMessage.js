const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "pm",
    description: "Pm the specific user whatever you want.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name:"target",
            description: "Please specify the user",
            type: "USER",
            required: true
        },
        {
            name: "content",
            description: "What would you like to pm the user.",
            type: "STRING",
            required: true
        }
    ],

    /**
     * @param { CommandInteraction } interaction
     */

    async execute(interaction) {

        const target = interaction.options.getMember("target");
        await target.user.fetch();
        
        const content = interaction.options.getString("content");

        try {
            await target.send({ content: `${content}`})
        } catch (err) {
            return await interaction.reply({content: `This user does not allow private messages.`, ephemeral: true})
        }

        interaction.reply({ content: "Message delivered.", ephemeral: true })
    }
}