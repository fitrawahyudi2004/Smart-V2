let fetch = require('node-fetch')
let handler = async (m, { conn, command, text,args, usedPrefix }) => {

let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''    

if (!teks) throw `
contoh :

${usedPrefix}${command} medan|jakarta

`
let buffer = await fetch(`https://api.lolhuman.xyz/api/travelroute?apikey=${lolkey}&from=${args[0]}&to=$[1]`)
let json = await buffer.json()
let thumb = json.result.image
let anu = (`
─────〔 *Travel Route* 〕─────

Dari : ${json.result.from}
Tujuan : ${json.result.to}

Deskripsi : ${json.result.description}

`.trim())
conn.sendFile(m.chat, thumb, 'hasil.jpg', anu, m)
}
handler.help = ['jarak2']
handler.command = ['jarak2']
handler.tags = ['internet']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
