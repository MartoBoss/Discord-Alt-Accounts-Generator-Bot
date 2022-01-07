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
        fs.readFile('./accounts/nitro.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/nitro.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

			let embed = new Discord.MessageEmbed()
            .addField("Unchecked Nitro Gift",`\n**${account}**`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/790848064231309322/794989165993000980/4.jpg')
            .setColor("#363940")
            .setFooter("Bot made by $MartoBossX#7777")
            .setTimestamp();
		
            msg.author.send(embed);		

			let xd = new Discord.MessageEmbed()
       	    .setColor("#ff0000")
            .setTitle("CHECK YOUR DM")
      
      	    .setThumbnail("https://support.discord.com/hc/article_attachments/1500001713881/Screen_Shot_2021-01-19_at_5.51.46_PM.png")
     	    .setFooter("CGen @2020-2022")
     	    .setTimestamp()
      	    .setDescription("I've sent you 1 Unchecked Nitro Gift")
  
                
				msg.reply(xd).then(m => {
                    setTimeout(() => {
                        m.delete();
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
    name: `gen-nitro`,
    description: `Sends you a Unchecked Nitro Code!`
};