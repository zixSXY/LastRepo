const command = { };

command.name = 'trancar';
command.aliases = ['lock'];
command.type = 'Defesa';
command.permissions = ['MANAGE_CHANNELS'];
command.description = 'Blockeia um canal';

command.execute = async function(client, message, args) {
	await message.channel.overwritePermissions([{ id: message.guild.id, deny: ['SEND_MESSAGES'] }]);
	message.reply('🔒o canal foi bloqueado com sucesso🔒');
};
    

module.exports = command;