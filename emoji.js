const command = { };

command.name = 'emoji';
command.type = 'Diversão';
command.description = 'Escolhe um emoji';

command.execute = async function(client, message, args) {
	if(! args[0] ) return message.reply('você precisa colocar o nome de um emoji');

	const emoji = message.guild.emojis.cache.find(e => e.name == args[0]);
	if(! emoji ) return message.reply('nao encontrei esse emoji');

	message.channel.send(emoji);
};
    

module.exports = command;