const Discord = require('discord.js')

const command = { };

command.name = 'addbot';
command.type = 'Informação';
command.description = 'veja meu link de convite';
command.execute = async function(client, message, args) {

const embed = new Discord.MessageEmbed()

.setDescription(
`\n[Me adicione em seu servidor](https://discord.com/oauth2/authorize?client_id=774954892514820177&scope=bot&permissions=8)`+

`\n**Estou junto com ${client.users.cache.size} usuarios**`+

`\n**Vivendo em ${client.guilds.cache.size} servidores**`);
embed.setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL());

message.channel.send(embed)
}

module.exports = command;