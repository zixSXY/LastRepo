const { MessageEmbed } = require('discord.js');

const command = { };

command.name = 'pagar';
command.aliases = ['pay'];
command.type = 'economia';
command.description = 'paga um usuario';

command.execute = async function(client, message, args) {
	const mention = message.mentions.users.first( );
	if(! mention )	return message.reply('você precisa mencionar um usuario');

	const Users = require('../jsons/users.json');
	const Save = require('../jsons/index.js');

	const MentionUser = Users[mention.id];
	const User = Users[message.author.id];

	if( mention.id == message.author.id ) return message.reply('voce nao pode usar esse comando em voce');

	if(! User ) return message.reply('tente usar o comando novamente');
	if(! MentionUser ) return message.reply('este usuario nao possui dados');
	
	if(! args[1] ) return message.reply('voce precisa colocar um valor');
	if( isNaN(args[1]) ) return message.reply(`${args[1]} nao e um numero`);

	const ammount = Number(args[1]);

	if( User.profile.cash < ammount ) return message.reply(`você nao possui ${ammount} coins`);

	MentionUser.profile.cash += ammount;
	User.profile.cash -= ammount;

	await Save('users.json', Users);

	message.reply(`você pagou ${ammount} coins para ${mention.username}`);
};

module.exports = command;