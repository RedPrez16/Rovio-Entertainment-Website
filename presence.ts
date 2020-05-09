var presence = new Presence({
  clientId: "707804267146117120"
});
var browsingStamp = Math.floor(Date.now() / 1000);
var title;
presence.on("UpdateData", async () => { // You had it like {} and forgot to put the code used in those two brackets
  const presenceData: presenceData = {
      largeImageKey: "logo"
  };
  if (document.location.pathname == "/") {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = ("Viewing the Rovio Entertainment Homepage");
  }
  let path = document.location.pathname;
  title = document.querySelector("#main > div.wrap > div.main-wrap > article > header > h1");
else let path = document.location.pathname;
  
  if (path.includes("/news/") && title) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = ("Looking at some news from Rovio");
  }
  else if (document.location.pathname.includes ("/games")){
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = ("Looking at the games Rovio make");
  }
  else if (document.location.pathname.includes ("/games/angry-birds")){
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = ("Looking at the Angry Birds games Rovio makes ");
  }
  else if (document.location.pathname.includes ("/sugar-blast")){
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = ("Looking at the Rovio made game Sugar Blast...");
  }
  else if (document.location.pathname.includes ("/more")){
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = ("Viewing the other crappy games they have...");
  }
//Their employee stories
else if (document.location.pathname.includes ("/careers/employee-stories")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing the avaiable employee stories");
}
else if (document.location.pathname.includes ("/careers/employee-story/laura-rokkanen")){
  presenceData.startTimestamp = browsingStamp;
presenceData.details = ("Viewing Laura Rokkanen's story")
}
else if (document.location.pathname.includes("/careers/employee-story/nim-frydman")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Nim Frydman's story")
}

else if (document.location.pathname.includes ("/careers/employee-story/di-zhong")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Di Zhong's story")
}
else if (document.location.pathname.includes ("/careers/employee-story/ignacio-amaya")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Ignacio Amaya's story")
}
else if (document.location.pathname.includes ("/careers/employee-story/jesse-lempiainen")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Jesse Lempiäinen's story")
}
else if (document.location.pathname.includes("/careers/employee-story/jenna-linden")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Jenna Lindén's story")
}
else if (document.location.pathname.includes ("/careers/employee-story/matteo-spiri")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Matto Spiri's story")
}
else if (document.location.pathname.includes ("/careers/employee-story/marc-olivier")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Marc Olivier's story")
}
else if (document.location.pathname.includes ("/careers/employee-story/nicole-yang")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Nicole Yang's story")  
}

//Main career page. I forgot to add it before all of the stories. Oh fucking well...
else if (document.location.pathname.includes ("/careers")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing the careers at Rovio")
}

//Rovio's teams stories

else if (document.location.pathname.includes ("our-teams")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing the avaiable stories about Rovio's teams")
}
else if (document.location.pathname.includes ("/careers/our-teams/puzzle-studio")){
presenceData.startTimestamp = browsingStamp;
presenceData.details = ("Viewing Rovio's Puzzle Studio story")
}
else if (document.location.pathname.includes("/careers/our-teams/stockholm-studio")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Rovio's Stockholm Studio's story")
}
else if (document.location.pathname.includes("/careers/our-teams/games-technology")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Rovio's Games Technology's story")
}
else if (document.location.pathname.includes ("/careers/our-teams/delta")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Delta's story")
}
else if (document.location.pathname.includes ("/careers/our-teams/battle-studio")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Battle Studio's story")  
}
//Trainee shit...
else if (document.location.pathname.includes ("/careers/trainee-faq")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Rovio's Frequently Asked Questions for trainees")
}
//Rovio loves fucking me over. So, they have a tab called "Investors..." It's a whole other fucking subdomain. It's "Investors.Rovio.com" Fucking kill me now... 
else if (document.location.pathname.includes ("invesstors.rovio.com")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Viewing Rovio's homepage for Investors")
}
else if (document.location.pathname.includes ("investors.rovio.com/en/about-rovio/who-we-are#Yeartab")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Seeing who Rovio is")
}
else if (document.location.pathname.includes ("investors.rovio.com/en/about-rovio/why-invest-rovio#Yeartab")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Seeing why they should invest in Rovio")
}
else if (document.location.pathname.includes ("investors.rovio.com/en/about-rovio/our-strategy#Yeartab")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Seeing Rovio's stragety")
}
else if (document.location.pathname.includes ("investors.rovio.com/en/about-rovio/values-and-culture#Yeartab")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Seeing Rovio's values and culture")
}
else if (document.location.pathname.includes ("investors.rovio.com/en/about-rovio/leadership-team#Yeartab")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Seeing Rovio's leadership team")
}
else if (document.location.pathname.includes ("investors.rovio.com/en/about-rovio/investor-relations#Yeartab")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Seeing Rovio's relationship with investors")
}
else if (document.location.pathname.includes ("investors.rovio.com/en/our-business")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Seeing what Rovio's business is about")
}
else if (document.location.pathname.includes ("https://investors.rovio.com/en/our-business/brand-licensing")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Seeing Rovio's licensing for their brands (Angry Birds mostly...)")
}
else if (document.location.pathname.includes ("investors.rovio.com/en/financials/key-financials#Yeartab")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Seeing Rovio's financials")
}
else if (document.location.pathname.includes ("https://investors.rovio.com/en/financials/key-financials#Outlook-guidance")){
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = ("Looking at Rovio's outlook guidance")
}
else if (document.location.pathname.includes ("https://investors.rovio.com/en/financials/interim-reports/year/2019#Yeartab")){
  presenceData.startTimestamp = browsingStamp; 
  presenceData.details =  ("Looking at Rovio's interim reports")  
}
else if (document.location.pathname.includes ("https://investors.rovio.com/en/financials/reports-and-presentations/year/2020#Yeartab")){
  presenceData.startTimestamp = browsingStamp; 
  presenceData.details = ("Looking at Rovio's reports and presentations")
}
})
