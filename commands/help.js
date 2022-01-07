const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('CGen Help')
	.setURL('https://discord.gg/rF3Ba6Sjp9')
	.setAuthor('$MartoBossX', 'https://media.giphy.com/media/4eeBEfOkQhFOfEwsBF/giphy.gif', 'https://discord.gg/rF3Ba6Sjp9')
	.setDescription('Commands: \n $gen-nitro \n $gen-nordvpn \n $gen-abv \n $gen-disney \n $gen-minecraft ')
	.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5ZGwv7r6Fokvynl7cd7WkTPc1F4vR_G-Lw&usqp=CAU')
	.setTimestamp()
	.setFooter('CGen @2020-2022');

message.channel.send(embed);
}
module.exports.help = {
  name: 'help'
}
