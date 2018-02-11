const Discord = require ("discord.js");

var bot = new Discord.Client();

bot.on("ready"function() {
    bot.user.setGame("|YoYoBot|y!help");
    console.log("Le bot à bien été connecté");
});

bot.login("Mzk1NjQ3NjYyODQ3ODE5Nzg2.DWGmCQ.-Tl3TzRaLDV1bt7vTYmxS5yxFa8");
