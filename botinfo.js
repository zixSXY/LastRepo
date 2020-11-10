const { MessageEmbed } = require('discord.js');

const command = { };

command.name = 'botinfo';
command.type = 'Informação';
command.description = 'Veja informações sobre o bot';

command.execute = async function(client, message, args) {


const embed = new MessageEmbed( );

embed.setTitle(`Sobre o Last`);
embed.setColor('#c3c3c3');
embed.setDescription(
    `**Me chamo Last**`+

    `\n**Tenho 15 anos**`+

    `\n**Sou um bot de: diversão, moderação, economia**`+

    `\n**Espero que gostem de mim**`+

    `\n**Meu prefixo principal é l!**`+

    '\n**[Servidor de suporte](https://discord.gg/huKrzBhuay)**'+

    '\n**[Meu link de convite](https://discord.com/oauth2/authorize?client_id=774954892514820177&scope=bot&permissions=8)**');

message.channel.send(embed)
};


module.exports = command;