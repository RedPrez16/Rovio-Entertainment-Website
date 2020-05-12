var presence = new Presence({
    clientId: "707804267146117120"
});
var browsingStamp = Math.floor(Date.now() / 1000);
var title;
var titleTwo;
var titleThree;
presence.on("UpdateData", async () => {
    const presenceData = {
        largeImageKey: "logo"
    };
    if (location.hostname == "rovio.com" || location.hostname == "www.rovio.com") {
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing the Rovio Entertainment Homepage");
        let path = document.location.pathname;
        title = document.querySelector("#main > div.wrap > div.main-wrap > article > header > h1");
        if (path.includes("/news/") && title) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Looking at " + title.textContent);
        }
        else if (document.location.pathname == "/games") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Looking at the games Rovio make");
        }
        if (document.location.pathname == ("/games/angry-birds")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Looking at the Angry Birds games Rovio makes ");
        }
        else if (document.location.pathname == ("/sugar-blast")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Looking at the Rovio made game Sugar Blast...");
        }
        else if (document.location.pathname == ("/more")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing the other crappy games they have...");
        }
        else if (document.location.pathname == ("/careers/employee-stories")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing the avaiable employee stories");
        }
        else if (document.location.pathname == ("/careers/employee-story/laura-rokkanen")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Laura Rokkanen's story");
        }
        else if (document.location.pathname.includes("/careers/employee-story/nim-frydman")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Nim Frydman's story");
        }
        else if (document.location.pathname == ("/careers/employee-story/di-zhong")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Di Zhong's story");
        }
        else if (document.location.pathname == ("/careers/employee-story/ignacio-amaya")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Ignacio Amaya's story");
        }
        else if (document.location.pathname == ("/careers/employee-story/jesse-lempiainen")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Jesse Lempiäinen's story");
        }
        else if (document.location.pathname.includes("/careers/employee-story/jenna-linden")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Jenna Lindén's story");
        }
        else if (document.location.pathname == ("/careers/employee-story/matteo-spiri")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Matto Spiri's story");
        }
        else if (document.location.pathname == ("/careers/employee-story/marc-olivier")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Marc Olivier's story");
        }
        else if (document.location.pathname == ("/careers/employee-story/nicole-yang")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Nicole Yang's story");
        }
        else if (document.location.pathname == ("/careers")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing the careers at Rovio");
        }
        else if (document.location.pathname == ("our-teams")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing the avaiable stories about Rovio's teams");
        }
        else if (document.location.pathname == ("/careers/our-teams/puzzle-studio")) {
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
        else if (document.location.pathname == ("/careers/our-teams/delta")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Delta's story");
        }
        else if (document.location.pathname == ("/careers/our-teams/battle-studio")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Battle Studio's story");
        }
        else if (document.location.pathname == ("/careers/trainee-faq")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Viewing Rovio's Frequently Asked Questions for trainees");
        }
    }
    if (location.hostname == "investors.rovio.com") {
        console.log("Hopefully");
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = ("Viewing Rovio's homepage for Investors");
        if (document.location.pathname == "/") {
        }
        else if (document.location.pathname == "/en/about-rovio/who-we-are") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Seeing who Rovio is");
        }
        else if (document.location.pathname == ("/en/about-rovio/why-invest-rovio#Yeartab")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Seeing why they should invest in Rovio");
        }
        else if (document.location.pathname == ("/en/about-rovio/our-strategy#Yeartab")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Seeing Rovio's stragety");
        }
        else if (document.location.pathname == ("/en/about-rovio/values-and-culture#Yeartab")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Seeing Rovio's values and culture");
        }
        else if (document.location.pathname == ("/en/about-rovio/leadership-team#Yeartab")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Seeing Rovio's leadership team");
        }
        else if (document.location.pathname == ("/en/about-rovio/investor-relations#Yeartab")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Seeing Rovio's relationship with investors");
        }
        else if (document.location.pathname == ("/en/our-business")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Seeing what Rovio's business is about");
        }
        else if (document.location.pathname == ("en/our-business/brand-licensing")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Seeing Rovio's licensing for their brands (Angry Birds mostly...)");
        }
        else if (document.location.pathname == ("/en/financials/key-financials#Yeartab")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Seeing Rovio's financials");
        }
        else if (document.location.pathname == ("en/financials/key-financials#Outlook-guidance")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Looking at Rovio's outlook guidance");
        }
        else if (document.location.pathname == ("en/financials/interim-reports/year/2019#Yeartab")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Looking at Rovio's interim reports");
        }
        else if (document.location.pathname == ("*.rovio.com/en/financials/reports-and-presentations/year/2020#Yeartab")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Looking at Rovio's reports and presentations");
        }
        else if (titleTwo != null) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Reading " + titleTwo.textContent);
        }
        else if (titleThree != null) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = ("Test " + titleThree.textContent);
        }
    }
    if (presenceData.details == null) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else {
        presence.setActivity(presenceData);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUMxQixRQUFRLEVBQUUsb0JBQW9CO0NBQy9CLENBQUMsQ0FBQztBQUNILElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2xELElBQUksS0FBSyxDQUFDO0FBQ1YsSUFBSSxRQUFRLENBQUM7QUFDYixJQUFJLFVBQVUsQ0FBQztBQUNmLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ25DLE1BQU0sWUFBWSxHQUFpQjtRQUMvQixhQUFhLEVBQUUsTUFBTTtLQUN4QixDQUFDO0lBRUYsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLFdBQVcsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLGVBQWUsRUFBQztRQUMzRSxZQUFZLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUM1QyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUNwRSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywwREFBMEQsQ0FBQyxDQUFBO1FBQzFGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDbEMsWUFBWSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7WUFDNUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUQ7YUFDSSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBQztZQUM5QyxZ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