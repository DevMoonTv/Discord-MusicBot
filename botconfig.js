module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "l", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "OTA5ODY1NjEzMjk4NjQ3MTcx.YZKgYg.evLPFuSAmJwDcyHdEk7qNDu7418", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "909865613298647171", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "nnVvQJMgtPHhPJvXOoaCn-Qh7K1Nkc8j", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Dj Haruky", //A Secret like a password
  IconURL:
    "http://pa1.narvii.com/7721/01af0f7d14fd7e606dfe93dd55ab6619a2399069r1-360-270_00.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "172.18.0.74", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Dj Haruky", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "172.18.0.27",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "haruky3301",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "e5d522924ca6402c8e7362a42379aa52", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "99bec88856274be183e9ac42660e8af6", //Spotify Client Secret
  },
};
