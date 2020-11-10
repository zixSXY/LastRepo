const { MessageEmbed } = require('discord.js');

const command = { };

command.name = 'diario';
command.aliases = ['daily'];
command.type = 'Economia';
command.description = 'Ganha um premio diario';

command.execute = async function(client, message, args) {
	const Users = require('../jsons/users.json');
	const Save = require('../jsons/index.js');
	const User = Users[ message.author.id ];

	if(! User ) return message.reply('tente usar o comando novamente');

	if(Math.floor(Date.now( ) - User.profile.daily) / (1000 * 60 * 60 * 24) < 1) return message.reply('você ja pegou sua recompensa diria hoje!')
	
	const Daily = Math.floor(Math.random( ) * 1000);
	User.profile.daily = new Date( ).getTime( );
	User.profile.cash += Daily;

	await Save('users.json', Users);

	const Embed = new MessageEmbed( );
	
	Embed.setTitle(`Recompensa Diaria`);
	Embed.setDescription(`${message.author} você coletou ${Daily} **coins**`);
	Embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
	Embed.setColor('#c3c3c3');
	Embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

	message.channel.send( Embed );
};



module.exports = command;