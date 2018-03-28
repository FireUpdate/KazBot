const coins = ['Heads', 'Tails'];

module.exports = {
	name: 'coin',
	aliases: ['toss'],
	description: 'Toss a coin!',
	args: false,
	cooldown: 5,
	guildOnly: false,
	execute(message) {
		const winner = coins[Math.floor(Math.random() * coins.length)];
		return message.reply(winner);
	},
};