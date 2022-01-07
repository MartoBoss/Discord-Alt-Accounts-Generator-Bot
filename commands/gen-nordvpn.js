const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();


module.exports.run = async (client, msg, args, config) => {
    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minutes to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/nordvpn.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/nordvpn.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.MessageEmbed()
            .addField('CGen', `https://discord.gg/rF3Ba6Sjp9`)
            .addField('NordVPN Account',`\n**${account}**`)
            .setColor("#363940")
            .setFooter('Bot made by $MartoBossX#7777')
            .setTimestamp();

            msg.author.send(embed);

var xd = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("CHECK YOUR DM")
      
        .setThumbnail("https://restoreprivacy.com/wp-content/uploads/2021/09/NordVPN-review.png")
        .setFooter("CGen @2020-2022")
        .setTimestamp()
        .setDescription("I've sent you 1 NordVPN Account")

                
msg.reply(xd).then(m => {
                    setTimeout(() => {
                    }, 900000);
                });

	
            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
		});
    }
};

module.exports.help = {
    name: `gen nordvpn`,
    description: `Sends you a NordVPN Account!`
};