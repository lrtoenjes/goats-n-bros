/*   STEP 1   */
export const leagueID = "784863651050926080"; // your league ID
export const leagueName = "GOATs 'n Bros"; // your league name
export const dues = 30; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2019, GOATs 'n Bros is a league of friends and friends-of-friends. We're stationed mostly in western Canada, with some members out East and Nevada. No matter the path we take, be it rebuild, productive struggle, youth movement, or affordable veterans, each manager strives towards one goal: to ultimately win a dynasty fantasy football championship.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,
      "name": "Luke T",
      "tookOver": null,
      "location": "Langdon, AB",
      "bio": "Started playing fantasy football in 2013. I'm in multiple leagues and also play fantasy hockey. I've been playing fantasy sports with Tom, Laine, Tyler, and Brad for over a decade. I'm a dad, and have three daughters who consume most of my life outside of fantasy sports.",
      "photo": "https://sleepercdn.com/avatars/56e6d0e7d5f769da50f8cf1fbcf3224c", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013,
      "favoriteTeam": "sea",
      "mode": "Dynasty",
      "rival": {
        name: "Rival",
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794,
      "valuePosition": "WR",
      "rookieOrVets": "Rookies",
      "philosophy": "Acquire young WRs and build depth. King of trash QBs.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper",
    },
    {
      "roster": 2,
      "name": "Laine R",
      "tookOver": null,
      "location": "Calgary, AB", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/5f1206220f01d558651525f3f6a6e06d",
      "fantasyStart": 2014,
      "favoriteTeam": "kc",
      "mode": "Rebuild",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 1426,
      "valuePosition": "WR",
      "rookieOrVets": "Rookies",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,
      "name": "Tom D",
      "tookOver": null,
      "location": "Chilliwack, BC",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/101689c5593bbfa94e765cbe6b36e52e",
      "fantasyStart": 2014,
      "favoriteTeam": "ne",
      "mode": "Win Now",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
    {
      "roster": 4,
      "name": "Ben",
      "tookOver": null,
      "location": "Calgary, AB",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/1afaa621c614595d7c97a4927d427b55",
      "fantasyStart": 2019,
      "favoriteTeam": "phi",
      "mode": "Dynasty",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
    {
      "roster": 5,
      "name": "Tyler K",
      "tookOver": 2021,
      "location": "BC",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/3eba21643fe1ffe10c86b4fc1de3583f",
      "fantasyStart": 2019,
      "favoriteTeam": null,
      "mode": "Dynasty",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
    {
      "roster": 6,
      "name": "Bernard P",
      "tookOver": 2020,
      "location": "NY",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/f20d82d64dccf35139d0c466d09fc6cd",
      "fantasyStart": 2019,
      "favoriteTeam": "lac",
      "mode": "Dynasty",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
    {
      "roster": 7,
      "name": "Kent",
      "tookOver": 2021,
      "location": "Calgary, AB",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/624a8387744e991e23600d45c3fff73f",
      "fantasyStart": 2019,
      "favoriteTeam": null,
      "mode": "Rebuild",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
    {
      "roster": 8,
      "name": "Brad B",
      "tookOver": null,
      "location": "Chilliwack, BC",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/03b366b23192016dc49f5c4c57eee94a",
      "fantasyStart": 2014,
      "favoriteTeam": "sea",
      "mode": "Win Now",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
    {
      "roster": 9,
      "name": "Grant P",
      "tookOver": null,
      "location": "Las Vegas, NV",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/3ba9b13839d8aae42305608dfbb1bfe2",
      "fantasyStart": 2019,
      "favoriteTeam": "pit",
      "mode": "Dynasty",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
    {
      "roster": 10,
      "name": "Jordan L",
      "tookOver": null,
      "location": "Calgary, AB",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/c1352eafc0936dfa76061a0397fad06f",
      "fantasyStart": 2019,
      "favoriteTeam": "buf",
      "mode": "Win Now",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
    {
      "roster": 11,
      "name": "Austin M",
      "tookOver": 2021,
      "location": "CA",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/8c3950ce5bfd68168d57b859e5e8eb21",
      "fantasyStart": null,
      "favoriteTeam": "buf",
      "mode": "Win Now",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
    {
      "roster": 12,
      "name": "Siemon R",
      "tookOver": null,
      "location": "Calgary, AB",
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/avatars/4a3e1fee0a9879f1bb2413085b1c2789",
      "fantasyStart": null,
      "favoriteTeam": "cin",
      "mode": "Dynasty",
      "rival": {
        name: "Rival",
        link: 6,
        image: "/managers/rival.jpg",
      },
      "favoritePlayer": 4034,
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10,
      "preferredContact": "Sleeper",
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },