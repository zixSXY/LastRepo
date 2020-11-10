const guilds = require('../jsons/guilds.json');
const save = require('../jsons/index.js');
const { MessageEmbed } = require ( "discord.js" );
const command = { };

command.name = 'prefixo';
command.type = 'Defesa';
command.permissions = ['ADMINISTRATOR'];
command.description = 'Escolhe um novo prefixo para o bot';

command.execute = async function(client, message, args) {
	
	const guildData = guilds[ message.guild.id ];
	if(! guildData ) return message.reply('tente usar o comando novamente');

	const { prefix } = guildData;
	const newPrefix = args[0];

	if(! newPrefix ) return message.reply('você precisa colocar um prefixo');

	guildData.prefix = newPrefix;

	await save('guilds.json', guilds);

	
	const embed = new MessageEmbed( );

	embed.setTitle(`Novo prefixo`);
	embed.addFields(
	{ name: 'Prefixo Antigo', value: prefix },
	{ name: 'Prefixo Novo', value: newPrefix }
	);
	embed.setColor('#c3c3c3');
	embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

	message.channel.send( embed );
};


module.exports = command;