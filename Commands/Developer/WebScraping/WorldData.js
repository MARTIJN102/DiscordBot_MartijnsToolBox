const puppeteer = require("puppeteer");
const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "worldometer",
    description: "Prints data about the world.",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {

        interaction.reply({ content: "Fetching data...", fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 1000) })

        const gettingDataMessage = "Fetching data..."

        const WorldDataEmbed = new MessageEmbed()
            .setTitle("World Data")
            .setDescription(`\`\`\`${gettingDataMessage}\`\`\``)
            .setTimestamp()

        const WorldData = await interaction.channel.send({ embeds: [WorldDataEmbed] })

        // var dataFetched = 0

        async function scrapeInfo(url) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url, {
                waitUntil: "load",
                timeout: 0
            });

            const [Population] = await page.$x(`//*[@id="c1"]/div[1]/span[1]`);
            const txt = await Population.getProperty('textContent');
            const WorldPopulation = await txt.jsonValue();

            const [Birth] = await page.$x(`//*[@id="c2"]/div[1]/span[1]`);
            const txt2 = await Birth.getProperty('textContent');
            const WorldBirth = await txt2.jsonValue();

            const [BirthsToday] = await page.$x(`//*[@id="c3"]/div[1]/span[1]`);
            const txt3 = await BirthsToday.getProperty('textContent');
            const WorldBirthsToday = await txt3.jsonValue();

            const [Deaths] = await page.$x(`/html/body/div[3]/div[2]/div[2]/div[1]/div[2]/div[5]/span[1]`);
            const txt4 = await Deaths.getProperty('textContent');
            const WorldDeaths = await txt4.jsonValue();

            const [DeathsToday] = await page.$x(`/html/body/div[3]/div[2]/div[2]/div[1]/div[2]/div[6]/span[1]`);
            const txt5 = await DeathsToday.getProperty('textContent');
            const WorldDeathsToday = await txt5.jsonValue();

            const [NetPopulationThisYear] = await page.$x(`//*[@id="c6"]/div[1]/span[1]`);
            const txt6 = await NetPopulationThisYear.getProperty('textContent');
            const WorldNetPopulationGrowthThisYear = await txt6.jsonValue();

            const [NetPopulationToday] = await page.$x(`/html/body/div[3]/div[2]/div[2]/div[1]/div[2]/div[8]/span[1]`);
            const txt7 = await NetPopulationToday.getProperty('textContent');
            const WorldNetPopulationGrowthToday = await txt7.jsonValue();

            const [PublicHealthcareExpenditure] = await page.$x(`//*[@id="c8"]/div[1]/span[1]`);
            const txt8 = await PublicHealthcareExpenditure.getProperty('textContent');
            const PublicHealthcareExpenditureCost = await txt8.jsonValue();

            const [PublicEducationExpenditure] = await page.$x(`//*[@id="c9"]/div[1]/span[1]`);
            const txt9 = await PublicEducationExpenditure.getProperty('textContent');
            const PublicEducationExpenditureCost = await txt9.jsonValue();

            const [PublicMilitaryExpenditure] = await page.$x(`//*[@id="c10"]/div[1]/span[1]`);
            const txt10 = await PublicMilitaryExpenditure.getProperty('textContent');
            const PublicMilitaryExpenditureCost = await txt10.jsonValue();

            const [CarsProducedThisYear] = await page.$x(`//*[@id="c11"]/div[1]/span[1]`);
            const txt11 = await CarsProducedThisYear.getProperty('textContent');
            const CarsProducedThisYearAmount = await txt11.jsonValue();

            const [BicyclesProducedThisYear] = await page.$x(`//*[@id="c12"]/div[1]/span[1]`);
            const txt12 = await BicyclesProducedThisYear.getProperty('textContent');
            const BicyclesProducedThisYearAmount = await txt12.jsonValue();

            const [ComputersProducedThisYear] = await page.$x(`//*[@id="c13"]/div[1]/span[1]`);
            const txt13 = await ComputersProducedThisYear.getProperty('textContent');
            const ComputersProducedThisYearAmount = await txt13.jsonValue();

            const [NewBookTitlesPublishedThisYear] = await page.$x(`//*[@id="c14"]/div[1]/span[1]`);
            const txt14 = await NewBookTitlesPublishedThisYear.getProperty('textContent');
            const NewBookTitlesPublishedThisYearAmount = await txt14.jsonValue();

            const [NewspapersCirculatedToday] = await page.$x(`//*[@id="c15"]/div[1]/span[1]`);
            const txt15 = await NewspapersCirculatedToday.getProperty('textContent');
            const NewspapersCirculatedTodayAmount = await txt15.jsonValue();

            const [TVSetsSoldWorldwideToday] = await page.$x(`//*[@id="c16"]/div[1]/span[1]`);
            const txt16 = await TVSetsSoldWorldwideToday.getProperty('textContent');
            const TVSetsSoldWorldwideTodayAmount = await txt16.jsonValue();

            const [CellularPhonesSoldToday] = await page.$x(`//*[@id="c17"]/div[1]/span[1]`);
            const txt17 = await CellularPhonesSoldToday.getProperty('textContent');
            const CellularPhonesSoldTodayAmount = await txt17.jsonValue();

            const [MoneySpentOnVideoGamesToday] = await page.$x(`//*[@id="c18"]/div[1]/span[1]`);
            const txt18 = await MoneySpentOnVideoGamesToday.getProperty('textContent');
            const MoneySpentOnVideoGamesTodayAmount = await txt18.jsonValue();

            const [InternetUsersInTheWorldToday] = await page.$x(`//*[@id="c19"]/div[1]/span[1]`);
            const txt19 = await InternetUsersInTheWorldToday.getProperty('textContent');
            const InternetUsersInTheWorldTodayAmount = await txt19.jsonValue();
            
            const [EmailsSentToday] = await page.$x(`//*[@id="c20"]/div[1]/span[1]`);
            const txt20 = await EmailsSentToday.getProperty('textContent');
            const EmailsSentTodayAmount = await txt20.jsonValue();

            const [BlogPostsWrittenToday] = await page.$x(`//*[@id="c21"]/div[1]/span[1]`);
            const txt21 = await BlogPostsWrittenToday.getProperty('textContent');
            const BlogPostsWrittenTodayAmount = await txt21.jsonValue();

            const [TweetsSentToday] = await page.$x(`//*[@id="c22"]/div[1]/span[1]`);
            const txt22 = await TweetsSentToday.getProperty('textContent');
            const TweetsSentTodayAmount = await txt22.jsonValue();

            const [GoogleSearchesToday] = await page.$x(`//*[@id="c23"]/div[1]/span[1]`);
            const txt23 = await GoogleSearchesToday.getProperty('textContent');
            const GoogleSearchesTodayAmount = await txt23.jsonValue();

            const [ForestLossThisYearHectares] = await page.$x(`//*[@id="c24"]/div[1]/span[1]`);
            const txt24 = await ForestLossThisYearHectares.getProperty('textContent');
            const ForestLossThisYearHectaresAmount = await txt24.jsonValue();

            const [LandLostToSoilErosionThisYearHectares] = await page.$x(`//*[@id="c25"]/div[1]/span[1]`);
            const txt25 = await LandLostToSoilErosionThisYearHectares.getProperty('textContent');
            const LandLostToSoilErosionThisYearHectaresAmount = await txt25.jsonValue();

            const [CO2EmissionsThisYearTons] = await page.$x(`//*[@id="c26"]/div[1]/span[1]`);
            const txt26 = await CO2EmissionsThisYearTons.getProperty('textContent');
            const CO2EmissionsThisYearTonsAmount = await txt26.jsonValue();

            const [DesertificationThisYearHectares] = await page.$x(`//*[@id="c27"]/div[1]/span[1]`);
            const txt27 = await DesertificationThisYearHectares.getProperty('textContent');
            const DesertificationThisYearHectaresAmount = await txt27.jsonValue();

            const [ToxicChemicalsReleasedTons] = await page.$x(`//*[@id="c28"]/div[1]/span[1]`);
            const txt28 = await ToxicChemicalsReleasedTons.getProperty('textContent');
            const ToxicChemicalsReleasedTonsAmount = await txt28.jsonValue();

            const NewWorldDataEmbed = new MessageEmbed()
                .setTitle("**World Data**")
                .setDescription(
                    `\`\`\``
                    +
                    "WORLD POPULATION"
                    +
                    `\n\n`
                    +
                    `Current world population:                  ${WorldPopulation}`
                    +
                    `\n`
                    +
                    `Births this year:                          ${WorldBirth}`
                    +
                    `\n`
                    +
                    `Births today:                              ${WorldBirthsToday}`
                    +
                    `\n`
                    +
                    `Deaths this year:                          ${WorldDeaths}`
                    +
                    `\n`
                    +
                    `Deaths today:                              ${WorldDeathsToday}`
                    +
                    `\n`
                    +
                    `Net population growth this year:           ${WorldNetPopulationGrowthThisYear}`
                    +
                    `\n`
                    +
                    `Net population growth today:               ${WorldNetPopulationGrowthToday}`
                    +
                    `\n\n\n`
                    +
                    "GOVERNMENT & ECONOMICS"
                    +
                    `\n\n`
                    +
                    `Public Healthcare expenditure today:       ${PublicHealthcareExpenditureCost}`
                    +
                    `\n`
                    +
                    `Public Education expenditure today:        ${PublicEducationExpenditureCost}`
                    +
                    `\n`
                    +
                    `Public Military expenditure today:         ${PublicMilitaryExpenditureCost}`
                    +
                    `\n`
                    +
                    `Cars produced this year:                   ${CarsProducedThisYearAmount}`
                    +
                    `\n`
                    +
                    `Bicycles produced this year:               ${BicyclesProducedThisYearAmount}`
                    +
                    `\n`
                    +
                    `Computers produced this year:              ${ComputersProducedThisYearAmount}`
                    +
                    `\n\n\n`
                    +
                    "SOCIETY & MEDIA"
                    +
                    `\n\n`
                    +
                    `New book titles published this year:       ${NewBookTitlesPublishedThisYearAmount}`
                    +
                    `\n`
                    +
                    `Newspapers circulated today:               ${NewspapersCirculatedTodayAmount}`
                    +
                    `\n`
                    +
                    `TV sets sold worldwide today:              ${TVSetsSoldWorldwideTodayAmount}`
                    +
                    `\n`
                    +
                    `Cellular phones sold today:                ${CellularPhonesSoldTodayAmount}`
                    +
                    `\n`
                    +
                    `Money spent on videogames today:           ${MoneySpentOnVideoGamesTodayAmount}`
                    +
                    `\n`
                    +
                    `Internet users in the world today:         ${InternetUsersInTheWorldTodayAmount}`
                    +
                    `\n`
                    +
                    `Emails sent today:                         ${EmailsSentTodayAmount}`
                    +
                    `\n`
                    +
                    `Blog posts written today:                  ${BlogPostsWrittenTodayAmount}`
                    +
                    `\n`
                    +
                    `Tweets sent today:                         ${TweetsSentTodayAmount}`
                    +
                    `\n`
                    +
                    `Google searches today:                     ${GoogleSearchesTodayAmount}`
                    +
                    `\n\n\n`
                    +
                    "ENVIRONMENT"
                    +
                    `\n\n`
                    +
                    `Forest loss this year (hectares):          ${ForestLossThisYearHectaresAmount}`
                    +
                    `\n`
                    +
                    `Land lost to soil erosion this year (ha):  ${LandLostToSoilErosionThisYearHectaresAmount}`
                    +
                    `\n`
                    +
                    `CO2 emissions this year (tons):            ${CO2EmissionsThisYearTonsAmount}`
                    +
                    `\n`
                    +
                    `Desertification this year (hectares):      ${DesertificationThisYearHectaresAmount}`
                    +
                    `\n`
                    +
                    `Toxic chemicals released this year(tons):  ${ToxicChemicalsReleasedTonsAmount}`
                    +
                    `\n\n\n`
                    +
                    "All the data shown above will contain real world data fetched from https://www.worldometers.info/"
                    +

                    `\`\`\``
                
                
                )
                .setTimestamp()
                .setColor("GREEN")

            WorldData.edit({ embeds: [NewWorldDataEmbed] })

            
            // dataFetched++
            // console.log("Data Fetched " + dataFetched)

            browser.close();
        }

        setInterval(() => {
            scrapeInfo("https://www.worldometers.info/")
        }, 5000);

    }
}