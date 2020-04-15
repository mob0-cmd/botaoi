const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require("enmap");
const token = "NjgyMTU1NTY2MDgwMTk2NjA5.XnxfTA.soEmm3w1NZoM-BmFzO08fGBZTtk";
const prefix = 'y!';

const typee = ["PLAYING", "WATCHING", "LISTENING"]
client.on('ready', () => {
    console.log(`Welcome bot by Pojan - Playing in ${client.guilds.cache.size} Servers`) //You can change this to whatever you wish it to say when you startup your bot! 
    let activities  = [ `With ${client.channels.cache.size} channels!`, `${prefix}help`, `With ${client.users.cache.size} users!` ], i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {type : typee[i++ % typee.length] }),20000)
});

client.on('guildMemberAdd', member => {
     const channel = member.guild.channels.cache.find(ch => ch.name === 'common-chat');
    // let channel = member.guild.channels.cache.get('672790367824773121');
    const gif = ["https://cdn.discordapp.com/attachments/651632572627025933/677724533309964301/Tak_berjudul_1_-1581652107881.gif", 
    "https://cdn.discordapp.com/attachments/672224097257652235/672404594705432576/068081ee5b913a47003a64f7233825fe.gif"];
    const image = `${gif[Math.floor(Math.random() * gif.length  - 0) + 0]}`;
      const embed = new Discord.MessageEmbed()

    .setAuthor(member.user.tag,member.user.avatarURL())
    .setTitle(`Welcome to ${member.guild.name}`)
    .setColor("RANDOM")
    .setDescription(`Selamat Datang ${member.user}\n Di ${member.guild.name.strike.bold()} \n introduce at ${member.guild.channels.cache.find(ch => ch.name === 'introduce')}`)
    .setImage(`${image}`)
    .setThumbnail(member.user.avatarURL({format: 'webp', dynamic: true, size:1024 }))
    .setFooter(` You are our ${member.guild.memberCount}th members`, member.guild.iconURL())
    
    if (!channel) return;
    channel.send({embed})
});

client.login(process.env.token)