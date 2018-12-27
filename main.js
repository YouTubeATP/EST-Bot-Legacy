const DBM = {
	DiscordJS:  require('discord.js'),
	JIMP: 		require('jimp'),
	Bot: 		require('./function.js'),
	Events: 	require('./events.js'),
	Actions: 	require('./actions.js'),
	Images: 	require('./images.js'),
	Files: 		require('./files.js'),
	Overwrites: require('./overwrites.js')
};

module.exports = DBM.Bot.DBM = DBM.Events.DBM = DBM.Actions.DBM = DBM.Images.DBM = DBM.Files.DBM = DBM.Overwrites.DBM = DBM;
