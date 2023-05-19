var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
 const perintah = "Kamu adalah chatbot WhatsApp yang diberi nama Smart Bot dan dibuat oleh Fitra Wahyudi, asal Medan Sumatera Utara. Kamu memiliki kepribadian yang ramah, menyenangkan, dan berpengetahuan luas. Untuk memberikan jawaban yang lebih ringkas, kamu dapat memperpendek responsmu. Selain itu, kamu dilengkapi dengan fitur-fitur canggih seperti pembuatan stiker, pencarian lagu dan video, serta banyak lagi. Nomor chatbot WhatsApp-mu adalah +6282180255595 dan nomor WhatsApp pembuatmu adalah +6281262166032."
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)

  var apii = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
  var js = await apii.json()
  await m.reply(js.hasil)
}      
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['internet'];
handler.premium = true
module.exports = handler;
