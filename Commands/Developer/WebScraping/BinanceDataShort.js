const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());
const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "binance",
    description: "Command will show current coin data prices",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {


        const gettingDataMessage = "Fetching data..."

        interaction.reply({ content: `${gettingDataMessage}`, fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 1000) })

        const CoinStartEmbed = new MessageEmbed()
            .setTitle("Crypto Data")
            .setDescription(`\`\`\`${gettingDataMessage}\`\`\``)
            .setTimestamp()

        const CoinData = await interaction.channel.send({ embeds: [CoinStartEmbed] })

        div1 = 1

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

            if (div1 === 10) {
                div1 = 0
            }

            divAddOne()

            const [CryptoName] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[${div1Add}]/div/div[1]/div/div[1]`);
            const txt = await CryptoName.getProperty('textContent');
            const CryptoNameValue = await txt.jsonValue();

            const [CryptoPrice] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[${div1Add}]/div/div[2]/div/div[1]`);
            const txt2 = await CryptoPrice.getProperty('textContent');
            const CryptoPriceValue = await txt2.jsonValue();

            const [dayChange] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[${div1Add}]/div/div[3]`);
            const txt3 = await dayChange.getProperty('textContent');
            const DayChangeValue = await txt3.jsonValue();

            const CoinEmbed = new MessageEmbed()
                .setTitle("CRYPTO PRICES")
                .setDescription(
                    `\`\`\``
                    +
                    `\n`
                    +
                    `=- Binance -= `
                    +
                    `\n\n`
                    +
                    `Name: ${CryptoNameValue}`
                    +
                    `\n`
                    +
                    `Price: $${CryptoPriceValue}`
                    +
                    `\n`
                    +
                    `24h Change: ${DayChangeValue}`
                    +
                    `\n\n\n`
                    +
                    `All the data shown above will contain real world data fetched from https://www.binance.com/en/markets`
                    +
                    "\`\`\`"
                )
                .setTimestamp()
                .setColor("GREEN")

            CoinData.edit({ embeds: [CoinEmbed] })

            browser.close();
        }

        setInterval(() => {
            scrapeInfo("https://www.binance.com/en/markets")
        }, 6000);
    }
}