var presence = new Presence({
    clientId: "707804267146117120"
});
var browsingStamp = Math.floor(Date.now() / 1000);
var title;
presence.on("UpdateData", async () => {
    const presenceData = {
        largeImageKey: "logo"
    };
    if (document.location.pathname == "/") {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing the Rovio Entertainment Homepage");
    }
    let path = document.location.pathname;
    title = document.querySelector("#main > div.wrap > div.main-wrap > article > header > h1");
    if (path.includes("/news/") && title) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Looking at some news from Rovio");
    }
    else if (document.location.pathname.includes("/games")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Looking at the games Rovio make");
    }
    else if (document.location.pathname.includes("/games/angry-birds")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Looking at the Angry Birds games Rovio makes ");
    }
    else if (document.location.pathname.includes("/sugar-blast")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Looking at the Rovio made game Sugar Blast...");
    }
    else if (document.location.pathname.includes("/more")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing the other crappy games they have...");
    }
    else if (document.location.pathname.includes("/careers/employee-stories")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing the avaiable employee stories");
    }
    else if (document.location.pathname.includes("/careers/employee-story/laura-rokkanen")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Laura Rokkanen's story");
    }
    else if (document.location.pathname.includes("/careers/employee-story/nim-frydman")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Nim Frydman's story");
    }
    else if (document.location.pathname.includes("/careers/employee-story/di-zhong")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Di Zhong's story");
    }
    else if (document.location.pathname.includes("/careers/employee-story/ignacio-amaya")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Ignacio Amaya's story");
    }
    else if (document.location.pathname.includes("/careers/employee-story/jesse-lempiainen")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Jesse Lempiäinen's story");
    }
    else if (document.location.pathname.includes("/careers/employee-story/jenna-linden")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Jenna Lindén's story");
    }
    else if (document.location.pathname.includes("/careers/employee-story/matteo-spiri")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Matto Spiri's story");
    }
    else if (document.location.pathname.includes("/careers/employee-story/marc-olivier")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Marc Olivier's story");
    }
    else if (document.location.pathname.includes("/careers/employee-story/nicole-yang")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Nicole Yang's story");
    }
    else if (document.location.pathname.includes("/careers")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing the careers at Rovio");
    }
    else if (document.location.pathname.includes("our-teams")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing the avaiable stories about Rovio's teams");
    }
    else if (document.location.pathname.includes("/careers/our-teams/puzzle-studio")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Rovio's Puzzle Studio story");
    }
    else if (document.location.pathname.includes("/careers/our-teams/stockholm-studio")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Rovio's Stockholm Studio's story");
    }
    else if (document.location.pathname.includes("/careers/our-teams/games-technology")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Rovio's Games Technology's story");
    }
    else if (document.location.pathname.includes("/careers/our-teams/delta")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Delta's story");
    }
    else if (document.location.pathname.includes("/careers/our-teams/battle-studio")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Battle Studio's story");
    }
    else if (document.location.pathname.includes("/careers/trainee-faq")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Rovio's Frequently Asked Questions for trainees");
    }
    else if (document.location.pathname.includes("invesstors.rovio.com")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Rovio's homepage for Investors");
    }
    else if (document.location.pathname.includes("investors.rovio.com/en/about-rovio/who-we-are#Yeartab")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Seeing who Rovio is");
    }
    else if (document.location.pathname.includes("investors.rovio.com/en/about-rovio/why-invest-rovio#Yeartab")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Seeing why they should invest in Rovio");
    }
    else if (document.location.pathname.includes("investors.rovio.com/en/about-rovio/our-strategy#Yeartab")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Seeing Rovio's stragety");
    }
    else if (document.location.pathname.includes("investors.rovio.com/en/about-rovio/values-and-culture#Yeartab")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Seeing Rovio's values and culture");
    }
    else if (document.location.pathname.includes("investors.rovio.com/en/about-rovio/leadership-team#Yeartab")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Seeing Rovio's leadership team");
    }
    else if (document.location.pathname.includes("investors.rovio.com/en/about-rovio/investor-relations#Yeartab")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Seeing Rovio's relationship with investors");
    }
    else if (document.location.pathname.includes("investors.rovio.com/en/our-business")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Seeing what Rovio's business is about");
    }
    else if (document.location.pathname.includes("https://investors.rovio.com/en/our-business/brand-licensing")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Seeing Rovio's licensing for their brands (Angry Birds mostly...)");
    }
    else if (document.location.pathname.includes("investors.rovio.com/en/financials/key-financials#Yeartab")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Seeing Rovio's financials");
    }
    else if (document.location.pathname.includes("https://investors.rovio.com/en/financials/key-financials#Outlook-guidance")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Looking at Rovio's outlook guidance");
    }
    else if (document.location.pathname.includes("https://investors.rovio.com/en/financials/interim-reports/year/2019#Yeartab")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Looking at Rovio's interim reports");
    }
    else if (document.location.pathname.includes("https://investors.rovio.com/en/financials/reports-and-presentations/year/2020#Yeartab")) {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Looking at Rovio's reports and presentations");
    }
    let path = document.location.pathname;
    title = document.querySelector("#maincontentWrapper > div > div:nth-child(2) > section > div > article > div > h1 > span");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUMxQixRQUFRLEVBQUUsb0JBQW9CO0NBQy9CLENBQUMsQ0FBQztBQUNILElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2xELElBQUksS0FBSyxDQUFDO0FBQ1YsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDbkMsTUFBTSxZQUFZLEdBQWlCO1FBQy9CLGFBQWEsRUFBRSxNQUFNO0tBQ3hCLENBQUM7SUFDRixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEdBQUcsRUFBRTtRQUNyQyxZQUFZLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUM1QyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztLQUNyRTtJQUNELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3RDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBEQUEwRCxDQUFDLENBQUM7SUFFM0YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUNsQyxZQUFZLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUM1QyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztLQUM5RDtTQUNJLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFFLFFBQVEsQ0FBQyxFQUFDO1FBQ3RELFlBQVksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxPQUFPLEdBQUcsQ0FB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