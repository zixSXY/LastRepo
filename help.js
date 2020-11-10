const { MessageEmbed } = require ( "discord.js" );


const command = { };

command.name = 'ajuda';
command.aliases = ['help'];
command.description = 'Mostra os meus comandos.';

command.execute = async function(client, message, args) {
	const embed = new MessageEmbed( );

	embed.setTitle('Olá eu me chamo **Last™** tenho **15** anos e estou aqui para alegrar seu servidor, **com minhas diversas funções**, esta e minha lista de comando!');
	embed.setColor('#c3c3c3');
	embed.setImage("https://cdn.discordapp.com/attachments/773171410218647562/775384118752968704/image0.jpg")
	embed.setDescription(
		'**Clique no Emoji de acordo com o que procura na minha lista!, temos aqui comandos de:**'
		+ '\n[<a:livroLU:770735528629895188>] Informação\n[<a:StaffLINDOR:770735617637875794>] Moderação\n[<a:sorteio:770735746159214613>] Diversão\n[<a:PartnerShrine:770734760812740659>] Creditos\n[<a:b_money:770735811242229800>] Economia\n[<a:EV_nitro:770735975424327722>] Defesa\n[🔄] Inicio'
	);
	embed.setTimestamp( );
	embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

	const msg = await message.channel.send(embed);
  let emoji1 = client.emojis.cache.get('770735528629895188');
  let emoji2 = client.emojis.cache.get('770735617637875794');
  let emoji3 = client.emojis.cache.get('770735746159214613');
  let emoji4 = client.emojis.cache.get('770734760812740659');
  let emoji5 = client.emojis.cache.get('770735811242229800');
  let emoji6 = client.emojis.cache.get('770735975424327722');

  msg.react(emoji1);
  msg.react(emoji2);
  msg.react(emoji3);
  msg.react(emoji4);
  msg.react(emoji5);
  msg.react(emoji6);
  msg.react('🔄');

	const commands = {
		infos: client.commands.filter(cmd => cmd.type && cmd.type.toLowerCase( ) == 'informação'),
		moderação: client.commands.filter(cmd => cmd.type && cmd.type.toLowerCase( ) == 'moderação'),
		fun: client.commands.filter(cmd => cmd.type && cmd.type.toLowerCase( ) == 'diversão'),
  		economy: client.commands.filter(cmd => cmd.type && cmd.type.toLowerCase( ) == 'economia'),
    	defesa: client.commands.filter(cmd => cmd.type && cmd.type.toLowerCase( ) == 'defesa')
  };
  

	const filters = {
		infos: (reaction, user) => reaction.emoji.id == '770735528629895188' && user.id == message.author.id,
		moderação: (reaction, user) => reaction.emoji.id == '770735617637875794' && user.id == message.author.id,
		fun: (reaction, user) => reaction.emoji.id == '770735746159214613' && user.id == message.author.id,
		credits: (reaction, user) => reaction.emoji.id == '770734760812740659' && user.id == message.author.id,
  		economy: (reaction, user) => reaction.emoji.id =='770735811242229800'&& user.id == message.author.id,
    	defesa: (reaction, user) => reaction.emoji.id =='770735975424327722'&& user.id == message.author.id,
		back: (reaction, user) => reaction.emoji.name == '🔄' && user.id == message.author.id
	};

	const infos = msg.createReactionCollector(filters['infos']);
	const moderação = msg.createReactionCollector(filters['moderação']);
	const fun = msg.createReactionCollector(filters['fun']);
	const credits = msg.createReactionCollector(filters['credits']);
	const economy = msg.createReactionCollector(filters['economy']);
	const defesa = msg.createReactionCollector(filters['defesa'])  
	  const back = msg.createReactionCollector(filters['back'])
	  
	  infos.on('collect', r => {
		r.users.remove(message.author.id)
		embed.setTitle(`[${commands.infos.size}] Comandos de informação`);
		embed.setImage("https://cdn.discordapp.com/attachments/773171410218647562/775405832778022922/image1.jpg")
		embed.setDescription( commands.infos.map(cmd => `[**${cmd.name}**] ${cmd.description || 'Sem Descrição'}`).join('\n') );
		msg.edit(embed);
	});
	moderação.on('collect', r => {
		r.users.remove(message.author.id)
		embed.setTitle(`[${commands.moderação.size}] Comandos de moderação`)
		embed.setImage("https://cdn.discordapp.com/attachments/773171410218647562/775418034986549298/image0.jpg")
		embed.setDescription( commands.moderação.map(cmd => `[**${cmd.name}**] ${cmd.description || 'Sem Descrição'}`).join('\n') );
		
		 msg.edit(embed);
	});
	fun.on('collect', r => {
		r.users.remove(message.author.id)
		embed.setTitle(`[${commands.fun.size}] Comando de diversão`);
		embed.setImage("https://media.discordapp.net/attachments/773171410218647562/775384119222861884/image1.jpg?width=681&height=475")
		embed.setDescription( commands.fun.map(cmd => `[**${cmd.name}**] ${cmd.description || 'Sem Descrição'}`).join('\n') );
		
		 msg.edit(embed);
	});
	credits.on('collect', r => {
		r.users.remove(message.author.id)
		embed.setTitle('Creditos');
		embed.setImage("https://media.discordapp.net/attachments/773171410218647562/775406721925382154/image0.jpg?width=682&height=475")
		embed.setDescription(
			`Meus **dev's** são **уℓσνє 探 e ‟ᏰᎷ・Atsushi❞**` +
			'\nTive toques de **Senpai** ' +
			'\nFui criado em **Open Source**\n' +
			'\n**[Servidor de suporte](https://discord.gg/huKrzBhuay)**'+
			'\n**[meu link de convite](https://discord.com/oauth2/authorize?client_id=774954892514820177&scope=bot&permissions=8)**');
		msg.edit(embed);
  	});
	  economy.on('collect', r => {
		r.users.remove(message.author.id)
		embed.setTitle(`[${commands.economy.size}] Comandos de economia`);
		embed.setImage("https://media.discordapp.net/attachments/773171410218647562/775405832535408790/image0.jpg?width=677&height=475")
		embed.setDescription( commands.economy.map(cmd => `[**${cmd.name}**] ${cmd.description || 'Sem Descrição'}`).join('\n') );
		 msg.edit(embed);
	});
		defesa.on('collect', r => {
		r.users.remove(message.author.id)
		embed.setTitle(`[${commands.defesa.size}] Comandos de defesa`);
		embed.setImage("https://cdn.discordapp.com/attachments/773171410218647562/775384120083742741/image3.jpg")
		embed.setDescription( commands.defesa.map(cmd => `[**${cmd.name}**] ${cmd.description || 'Sem Descrição'}`).join('\n') );
		 msg.edit(embed);
	});
	back.on('collect', r => {
		r.users.remove(message.author.id)
		embed.setTitle('Olá eu me chamo **Last™** tenho **15** anos e estou aqui para alegrar seu servidor, com minhas diversas funções, esta e minha lista de comando!');
		embed.setImage("https://media.discordapp.net/attachments/773171410218647562/775384118752968704/image0.jpg?width=678&height=475")
		embed.setColor('#c3c3c3');
		embed.setDescription(
			'**Clique no Emoji de acordo com o que procura na minha lista!**'
			+ '\n[[<a:livroLU:770735528629895188>] Informação\n[<a:StaffLINDOR:770735617637875794>] Administração\n[<a:sorteio:770735746159214613>] Diversão\n[<a:PartnerShrine:770734760812740659>] Creditos\n[<a:b_money:770735811242229800>] Economia\n[<a:EV_nitro:770735975424327722>] Registro\n[🔄] Inicio'
		);

		 msg.edit(embed);
		
	});
};
    

module.exports = command;