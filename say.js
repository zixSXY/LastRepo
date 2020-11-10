const command = { };

command.name = 'falar';
command.aliases = ['say'];
command.type = 'Diversão';
command.description = 'Faz o bot falar algo';

command.execute = async function(client, message, args) {
	message.channel.send(args.join(' ') || message.author + ' você precisa colocar uma mensagem');
    message.delete().catch(O_o => {});
};

module.exports = command;