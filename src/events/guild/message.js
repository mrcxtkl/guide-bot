module.exports = async (client, message) => {
	if (message.author.bot || message.channel.type === 'dm') return;

	const prefix = process.env.PREFIX

	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();

	const command = client.commands.find(c => c.config.name.toLowerCase() === cmd || (c.config.aliases && c.config.aliases.includes(cmd)))
	if (command) command.run({ client, message, args })
}