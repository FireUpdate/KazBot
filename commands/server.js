const Discord = require('discord.js');

module.exports = {
	name: 'server',
	aliases: ['guild'],
	description: 'Discord Server Information',
	args: false,
	cooldown: 5,
	guildOnly: true,
	execute(message) {
		const guildEmbed = new Discord.RichEmbed()
			.setColor('DARK_GOLD')
			.setTitle(message.member.guild.name)
			.setThumbnail(message.member.guild.iconURL)
			.addField('Server Owner', message.guild.owner.displayName, true)
			.addField('Total Members', message.guild.memberCount, true)
			.addField('Server Region', message.guild.region, true)
			.addField('AFK Channel', message.guild.afkChannel.name, true)
			.setFooter('@Kaz-Bot')
			.setTimestamp(new Date());

		return message.channel.send({ embed: guildEmbed });
	},
};