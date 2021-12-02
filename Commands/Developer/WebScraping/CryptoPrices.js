const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());
const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "crypto",
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
            .setTitle("Corona Data")
            .setDescription(`\`\`\`${gettingDataMessage}\`\`\``)
            .setTimestamp()

        const CoinData = await interaction.channel.send({ embeds: [CoinStartEmbed] })

        async function scrapeInfo(url) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url, {
                waitUntil: "load",
                timeout: 0
            });

            const [Number1Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div[1]/div/div[1]`);
            const txt = await Number1Crypto.getProperty('textContent');
            const Number1CryptoName = await txt.jsonValue();

            const [Number1Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div[2]/div/div[1]`);
            const txt2 = await Number1Price.getProperty('textContent');
            const Number1CryptoPrice = await txt2.jsonValue();

            const [Number2Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[1]/div/div[1]`);
            const txt3 = await Number2Crypto.getProperty('textContent');
            const Number2CryptoName = await txt3.jsonValue();

            const [Number2Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/div[1]`);
            const txt4 = await Number2Price.getProperty('textContent');
            const Number2CryptoPrice = await txt4.jsonValue();

            const line = "============================================================="

            const CoinEmbed = new MessageEmbed()
                .setTitle("CRYPTO PRICES")
                .setDescription(
                    `\`\`\``
                    +
                    `${line}\n`
                    +
                    `=========================- Binance -=========================`
                    +
                    `\n${line}\n\n`
                    +
                    `${Number1CryptoName} Price:         $${Number1CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number2CryptoName} Price:         $${Number2CryptoPrice}`
                    +
                    `\n\n`
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
        }, 5000);
    }
}