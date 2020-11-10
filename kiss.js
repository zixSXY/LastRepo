const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

const command = { };

command.name = 'beijar';
command.aliases = ['kiss'];
command.type = 'Diversão';
command.description = 'Beija um usuario';

command.execute = async function(client, message, args) {
	const user = message.author;
	const member = message.mentions.users.first( );

	if(! member ) return message.reply('você precisa mencionar o usuario que deseja beijar');

	const msg = user.id == member.id ? `${user} se beijou` : `${user} beijou ${member}`;

	fetch('https://nekos.life/api/v2/img/kiss')
	.then(response => response.json( ))
	.then(({ url }) => {
		const embed = new MessageEmbed( );
	
		embed.setTitle(`Beijo`);
		embed.setDescription(msg);
		embed.setImage(url);
		embed.setColor('#c3c3c3');
		embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

		message.channel.send( embed );
	})
};
    

module.exports = command;