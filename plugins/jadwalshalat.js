const { result } = require('lodash')
let fetch = require ('node-fetch')
let handler = async (m, { conn, command, text, args, usedPrefix }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''    

 if (!teks) throw `
 Contoh:\n${usedPrefix}${command} medan`

let buffer = await fetch(`https://api.lolhuman.xyz/api/sholat/${teks}?apikey=${lolkey}`)
let json = buffer.json()

m.reply= (
`
─────〔 *Jadwal Shalat* 〕─────

*Wilayah :* ${json.result.wilayah}
*Tanggal :* ${json.result.tanggal}
*Sahur :* ${json.result.sahur}
*Imsak :* ${json.result.imsak}
*Subuh :* ${json.result.subuh}
*Terbit :* ${json.result.terbit}
*Dhuha* ${json.result.dhuha}
*Dzuhur :* ${json.result.dzuhur}
*Ashar :* ${json.result.ashar}
*Maghrib :* ${json.result.maghrib}
*Isya :* ${json.result.isya}
`)
// conn.sendFile(m.chat, buffer, 'hasil.jpg', "Nih kk KTP nya ", m)
}
handler.help = ['jadwalshalat <Wilayah>']
handler.command = ['jadwalshalat']
handler.tags = ['islamic']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler

