const { MessageEmbed } = require("discord.js");

const command = { };

command.name = 'limpar';
command.aliases = ['clear'];
command.type = 'Defesa';
command.permissions = ['BAN_MEMBERS'];
command.description = 'Exclui as mensagens';

command.execute = async function(client, message, args) {
	const deleteCount = args[0];
	if( isNaN(deleteCount) ) return message.reply('você precisa colocar um numero valido');

	if( deleteCount > 100 || deleteCount <= 1 ) return message.reply('você precisa colocar um numero etnre 2 - 100');

	await message.delete( );

	try {
		await message.channel.bulkDelete(deleteCount);

		const embed = new MessageEmbed( );
		
		embed.setTitle(`Limpar`);
		embed.setDescription(`${deleteCount} mensagens foram limpas!`);
		embed.setColor('#c3c3c3');
		embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

		message.channel.send( embed );
	} catch ( error ) {
		console.error ( error );
		message.reply('ocorreu um erro ao limpar as mensagens');
	};
};
   

module.exports = command;