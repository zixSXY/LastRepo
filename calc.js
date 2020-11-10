const { MessageEmbed } = require('discord.js');

const math = require('mathjs');

const command = { };

command.name = 'calcular';
command.aliases = ['calc'];
command.type = 'Diversão';
command.description = 'Faz um calculo';

command.execute = async function(client, message, args) {
	const calc = args.slice(0).join(' ').replace(/\s+/g, '');

	if(! calc ) return message.reply('você precisa colocar uma conta');

	try {
		const result = math.evaluate(calc);

		const embed = new MessageEmbed( );
	
		embed.setTitle(`Calcular`);
		embed.setColor('#c3c3c3');
		embed.addFields(
			{ name: 'Conta', value: `\`\`\`js\n${calc}\`\`\`` },
			{ name: 'Resultado', value: `\`\`\`js\n${result}\`\`\``  }
		);
		embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

		message.channel.send( embed );
	} catch ( error ) {
		console.error ( error );
		message.reply('ocorreu um erro durante a execução do calculo');
	};
};
    

module.exports = command;