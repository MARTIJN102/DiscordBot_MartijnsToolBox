const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());
const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "worldmedia",
    description: "world data about the media",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {


        const gettingDataMessage = "Fetching data..."

        interaction.reply({ content: `${gettingDataMessage}`, fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 1000) })

        const CoinStartEmbed = new MessageEmbed()
            .setTitle("World Media Data")
            .setDescription(`\`\`\`${gettingDataMessage}\`\`\``)
            .setTimestamp()

        const WorldData = await interaction.channel.send({ embeds: [CoinStartEmbed] })

        div1 = 17

        function divAddOne() {

            div1Add = div1++

        }

        async function scrapeInfo(url) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url, {
                waitUntil: "load",
                timeout: 0
            });

            if (div1 === 27) {
                div1 = 17
            }

            divAddOne()

            const [DataName] = await page.$x(`/html/body/div[3]/div[2]/div[2]/div[1]/div[2]/div[${div1Add}]/div[1]/span[2]`);
            const txt = await DataName.getProperty('textContent');
            const DataNameValue = await txt.jsonValue();

            const [DataPrice] = await page.$x(`/html/body/div[3]/div[2]/div[2]/div[1]/div[2]/div[${div1Add}]/div[1]/span[1]`);
            const txt2 = await DataPrice.getProperty('textContent');
            const DataValue = await txt2.jsonValue();

            const DataEmbed = new MessageEmbed()
                .setTitle("WORLD DATA")
                .setDescription(
                    `\`\`\``
                    +
                    `\n`
                    +
                    `=- SOCIETY & MEDIA -= `
                    +
                    `\n\n`
                    +
                    `Name: ${DataNameValue}`
                    +
                    `\n`
                    +
                    `Data: ${DataValue}`
                    +
                    `\n\n`
                    +
                    `All the data shown above will contain real world data fetched from https://www.worldometers.info/`
                    +
                    "\`\`\`"
                )
                .setTimestamp()
                .setColor("GREEN")

            WorldData.edit({ embeds: [DataEmbed] })

            browser.close();
        }

        setInterval(() => {
            scrapeInfo("https://www.worldometers.info/")
        }, 6000);
    }
}