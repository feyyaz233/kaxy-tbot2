const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
   
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "tik");
  const arrifentembed = new Discord.RichEmbed()
  .setColor("black")
  .setAuthor('Bilgi', `${message.author.displayAvatarURL}`)
        .addField(`￥ Ses kanallarında ${count} kişi bulunmaktadır.`, `￥ Sunucuda ${message.guild.memberCount} kişi bulunmaktadır.`)
        .setThumbnail("https://cdn.discordapp.com/attachments/781261685951299654/784403601082417182/AdzRqiYb7_QoEbEiYNQeXQ_r.jpg")
        .setTimestamp()
        .setFooter(`Developed : https://cdn.discordapp.com/attachments/781261685951299654/784403606118858762/a235zEblFtT3mGY-prbypQ_r.jpg`)
 
  message.channel.sendEmbed(arrifentembed)
  message.react(emoji)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'kullanıcıyı susturur.',
  usage: 'say'
};