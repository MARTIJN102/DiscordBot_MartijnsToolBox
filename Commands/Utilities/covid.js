const {CommandInteraction, MessageEmbed} = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "covid",
    description: "Information about covid and the amount of cases in each country",
    options: [
        {
            name: "country",
            description: "the country you want to see the corona data of.",
            type: "STRING",
            required: true
        }
    ],

    /**
     * @param { CommandInteraction } interaction
     */

    async execute(interaction) {

        const Country = interaction.options.getString("country")

        const url = await axios.get("https://disease.sh/v3/covid-19/countries/" + Country)

        console.log(url.data)

        const covidEmbed = new MessageEmbed()
        .setTitle(`Covid info about: [${url.data.country}]`)
        .addFields(
            //{name: "Country:", value: `${url.data.country}`},
            {name: "Cases:", value: `\`\`\`${url.data.cases}\`\`\``, inline: true},
            {name: "Cases Today:", value: `\`\`\`${url.data.todayCases}\`\`\``, inline: true},
            {name: '\u200b', value: '\u200b', inline: false},
            {name: "Deaths:", value: `\`\`\`${url.data.deaths}\`\`\``, inline: true},
            {name: "Deaths Today:", value: `\`\`\`${url.data.todayDeaths}\`\`\``, inline: true},
            {name: '\u200b', value: '\u200b', inline: false},
            {name: "Recovered:", value: `\`\`\`${url.data.recovered}\`\`\``, inline: true},
            {name: "Recovered Today:", value: `\`\`\`${url.data.todayRecovered}\`\`\``, inline: true},
            {name: '\u200b', value: '\u200b', inline: false},
            {name: "Active:", value: `\`\`\`${url.data.active}\`\`\``, inline: true},
            {name: "Critical:", value: `\`\`\`${url.data.critical}\`\`\``, inline: true},
            {name: '\u200b', value: '\u200b', inline: false},
            {name: "Tests:", value: `\`\`\`${url.data.tests}\`\`\``, inline: true},
            {name: "Tests Per One Million:", value: `\`\`\`${url.data.testsPerOneMillion}\`\`\``, inline: true},
            {name: '\u200b', value: '\u200b', inline: false},
            {name: "Cases Per One Million:", value: `\`\`\`${url.data.casesPerOneMillion}\`\`\``, inline: true},
            {name: "Deaths Per One Million:", value: `\`\`\`${url.data.deathsPerOneMillion}\`\`\``},
        )

        interaction.reply({embeds: [covidEmbed]})

    }
}