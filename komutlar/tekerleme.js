const discord = require("discord.js")

exports.run = function(client, message, args){

var box = [
   "İbiş’ le Memiş mahkemeye gitmiş, mahkemeleşmiş mi, mahkemeleşememiş mi?",
  " Bu yoğurdu sarımsaklasak da mı saklasak, sarımsaklamasak da mı saklasak?",
   "Şu köşe yaz köşesi, bu köşe kış köşesi, ortada su şişesi.",
  "Kapı gıcırdatanlardan mısınız? Kıvılcım sıçratıcılardan mısınız?",
  "Kırk kartal, kırk kanadı kırık kartal. Kırkı kalkar, kırkı konar.",
   "Kırk kırık küp. Kırkının da kulpu kırık kara kırık küp.",
  "Bu mum umumumuzun mumu.",
  "Şiş şişeyi şişlemiş, şişe de keşişe kış demiş.",
  "Şu duvarı badanalamalı mı? Badanalamamalı mı?",
   "Dal sarkar kartal kalkar; kartal kalkar dal sarkar.",
  "Keşkekçinin keşkekleşmemiş keşkek kepçesi",
  "Şemsi Paşa pasajında sesi büzüşesiceler.",
"Gül dibi bülbül dili gibi bülbül dili gül dibi gibi.",
"Paşa tası ile beş has tas kayısı hoşafı.",
"Götür küpü, dök küpü. Getir küpü dök küpü",
"GüI dibi, büIbüI diIi gibi",
"Çarşıda koza ucuz, çarşıda darı ucuz, çarşıda boza da ucuz mu?",
"Sudan çıktı iki su şadısı, biri erkek şu şadısı, diğeri dişi şu şadısı.",
"Keşkekçinin keşkekIenmiş keşkek kepçesi.",
"Bu evi yıkıp yapsak da mı otursak, yoksa yıkmasak onarsak da mı otursak?",
"ÇataIcada topaI çoban çataI yapıp çataI satar, nesi için çataIcada topaI çoban çataI yapıp çataI satar?",
"Dört deryanın deresini dört dergâhın derbendine devrederIerse, dört deryadan dört dert, dört dergâhtan dört dev çıkar.",
  "O pikap, şu pikap, bu pikap.",
]
const tonslip = box[Math.floor(Math.random() * box.length)];

message.channel.send(
new discord.RichEmbed()
.setTitle("Tekerleme")
.setDescription(tonslip)
  )
}

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'tekerleme',//Komutun adı (Komutu girerken lazım olucak)
  category: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  description: 'Rastgele bir tekerleme atar',//Komutun Açıklaması
  usage: 'tekerleme' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}