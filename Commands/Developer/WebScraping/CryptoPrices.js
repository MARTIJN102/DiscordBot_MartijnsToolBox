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
            .setTitle("Crypto Data")
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

            const [Number3Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[3]/div/div[1]/div/div[1]`);
            const txt5 = await Number3Crypto.getProperty('textContent');
            const Number3CryptoName = await txt5.jsonValue();

            const [Number3Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div[1]`);
            const txt6 = await Number3Price.getProperty('textContent');
            const Number3CryptoPrice = await txt6.jsonValue();

            const [Number4Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[4]/div/div[1]/div/div[1]`);
            const txt7 = await Number4Crypto.getProperty('textContent');
            const Number4CryptoName = await txt7.jsonValue();

            const [Number4Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[4]/div/div[2]/div/div[1]`);
            const txt8 = await Number4Price.getProperty('textContent');
            const Number4CryptoPrice = await txt8.jsonValue();

            const [Number5Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[5]/div/div[1]/div/div[1]`);
            const txt9 = await Number5Crypto.getProperty('textContent');
            const Number5CryptoName = await txt9.jsonValue();

            const [Number5Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[5]/div/div[2]/div/div[1]`);
            const txt10 = await Number5Price.getProperty('textContent');
            const Number5CryptoPrice = await txt10.jsonValue();

            const [Number6Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[6]/div/div[1]/div/div[1]`);
            const txt11 = await Number6Crypto.getProperty('textContent');
            const Number6CryptoName = await txt11.jsonValue();

            const [Number6Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[6]/div/div[2]/div/div[1]`);
            const txt12 = await Number6Price.getProperty('textContent');
            const Number6CryptoPrice = await txt12.jsonValue();

            const [Number7Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[7]/div/div[1]/div/div[1]`);
            const txt13 = await Number7Crypto.getProperty('textContent');
            const Number7CryptoName = await txt13.jsonValue();

            const [Number7Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[7]/div/div[2]/div/div[1]`);
            const txt14 = await Number7Price.getProperty('textContent');
            const Number7CryptoPrice = await txt14.jsonValue();

            const [Number8Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[8]/div/div[1]/div/div[1]`);
            const txt15 = await Number8Crypto.getProperty('textContent');
            const Number8CryptoName = await txt15.jsonValue();

            const [Number8Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[8]/div/div[2]/div/div[1]`);
            const txt16 = await Number8Price.getProperty('textContent');
            const Number8CryptoPrice = await txt16.jsonValue();

            const [Number9Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[9]/div/div[1]/div/div[1]`);
            const txt17 = await Number9Crypto.getProperty('textContent');
            const Number9CryptoName = await txt17.jsonValue();

            const [Number9Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[9]/div/div[2]/div/div[1]`);
            const txt18 = await Number9Price.getProperty('textContent');
            const Number9CryptoPrice = await txt18.jsonValue();

            const [Number10Crypto] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[10]/div/div[1]/div/div[1]`);
            const txt19 = await Number10Crypto.getProperty('textContent');
            const Number10CryptoName = await txt19.jsonValue();

            const [Number10Price] = await page.$x(`/html/body/div[1]/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[10]/div/div[2]/div/div[1]`);
            const txt20 = await Number10Price.getProperty('textContent');
            const Number10CryptoPrice = await txt20.jsonValue();

            const CoinEmbed = new MessageEmbed()
                .setTitle("CRYPTO PRICES")
                .setDescription(
                    `\`\`\``
                    +
                    `\n`
                    +
                    `=- Binance -=`
                    +
                    `\n\n`
                    +
                    `${Number1CryptoName} Price:    $${Number1CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number2CryptoName} Price:    $${Number2CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number3CryptoName} Price:    $${Number3CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number4CryptoName} Price:    $${Number4CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number5CryptoName} Price:    $${Number5CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number6CryptoName} Price:    $${Number6CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number7CryptoName} Price:    $${Number7CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number8CryptoName} Price:    $${Number8CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number9CryptoName} Price:    $${Number9CryptoPrice}`
                    +
                    `\n`
                    +
                    `${Number10CryptoName} Price:    $${Number10CryptoPrice}`
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
        }, 30000);
    }
}