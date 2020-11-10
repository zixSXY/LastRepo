const Discord = require("discord.js")

const command = { };

command.name = 'coinflip';
command.type = 'Diversão';
command.description = 'Joga cara ou coroa com o bot';

command.execute = async function(client, message, args) {
	const choices = ['cara', 'coroa'];
	const random = ( ) => Math.floor(Math.random( ) * choices.length );

	const choice = args[0] == 'cara' ? 'cara' : 'coroa';

	const result = choices[random( )];

	if( result == choice ) return message.reply(`deu ${result}, você venceu`);
	else return message.reply(`deu ${result}, eu venci`);
};
    

module.exports = command;