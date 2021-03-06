const { MessageEmbed } = require("discord.js");
const guilds = require('../jsons/guilds.json');
const save = require('../jsons/index.js');

const command = { };

command.name = 'saiu';
command.type = 'Moderação';
command.permission = ['ADMINISTRATOR'];
command.description = 'coloce uma menssagem de membros que sairam';

command.execute = async function(client, message, args) {
	const guildData = guilds[ message.guild.id ];
	if(! guildData ) return message.reply('tente usar o comando novamente');

	if(! args[0] ) {
		const embed = new MessageEmbed( );
		
		embed.setTitle(`Como usar`);
		embed.addFields(
			{ name: 'Definir a mensagem de saida', value: `${guildData.prefix}${command.name} **mensagem** <mensagem>` },
			{ name: 'Definir o canal de saida', value: `${guildData.prefix}${command.name} **canal** <canal>` },
			{ name: 'Definir o status do comando de saida', value: `${guildData.prefix}${command.name} **status** <ligar/desligar>` },
			{ name: 'Testar o comando', value: `${guildData.prefix}${command.name} **testar**` },
			{ name: 'Veja as configurações', value: `${guildData.prefix}${command.name} **configurações**` }
		);
		embed.setColor('#c3c3c3');
		embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

		return message.channel.send( embed );
	};

	if( args[0] == 'mensagem' ) {
		const msg = args.slice(1).join(' ');
		if(! msg ) return message.reply('você precisa colocar uma mensagem');

		guildData.joinMember.message = msg;
		await save('guilds.json', guilds);

		message.reply(`mensagem de saida setada`);
	} else if ( args[0] == 'canal' ) {
		const channel = message.mentions.channels.first( );
		if(! channel ) return message.reply('você precisa mencionar o canal de saida');

		guildData.joinMember.channel = channel.id;
		await save('guilds.json', guilds);

		message.reply(`canal de saida setado`);
	} else if ( args[0] == 'status' ) {
		const status = args[1] == 'ligar' ? true : false;
		const statusMsg = status ? 'comando ligado' : 'comando desligado';

		guildData.joinMember.status = status;
		await save('guilds.json', guilds);

		message.reply(statusMsg);
	} else if ( args[0] == 'configurações') {
		const embed = new MessageEmbed( );
		
		embed.setTitle(`Bem Vindo`);
		embed.addFields(
			{ name: 'Mensagem de saida', value: guildData.leftMember.message },
			{ name: 'Canal de saida', value: message.guild.channels.cache.get(guildData.leftMember.channel) },
			{ name: 'Status do Comando de saida', value: guildData.leftMember.status ? 'Ligado' : 'Desligado' }
		);
		embed.setColor('#c3c3c3');
		embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

		return message.channel.send( embed );
	} else if ( args[0] == 'testar' ) {
		client.emit('guildMemberAdd', message.member);
	} else {
		const embed = new MessageEmbed( );
		
		embed.setTitle(`Como usar`);
		embed.addFields(
			{ name: 'Definir a mensagem de saida', value: `${guildData.prefix}bem-vindo mensagem <mensagem>` },
			{ name: 'Definir o canal de saida', value: `${guildData.prefix}bem-vindo canal <canal>` },
			{ name: 'Definir o status do comando de saida', value: `${guildData.prefix}bem-vindo status <ligar/desligar>` }
		);
		embed.setColor('#c3c3c3');
		embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

		return message.channel.send( embed );
	};
};
    

module.exports = command;