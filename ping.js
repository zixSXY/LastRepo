const command = { };

command.name = 'ping';
command.aliases = ['ms'];
command.type = 'Informação';
command.description = 'Veja se eu estou funcionando';

command.execute = async function(client, message, args) {
	const msg = await message.channel.send('calculando');
	msg.edit(`Latencia do Servidor [${msg.createdTimestamp - message.createdTimestamp} ms]`);
};
   

module.exports = command;
