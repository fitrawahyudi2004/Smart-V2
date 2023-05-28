const { result } = require('lodash')
let fetch = require ('node-fetch')
let handler = async (m, { conn, command, text, args, usedPrefix }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''    

 if (!teks) throw `
 Contoh:\n${usedPrefix}${command} isa`

let buffer = await fetch(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=${lolkey}`)
let json = buffer.json()
m.reply= (
`
─────〔 *Kisah Nabi* 〕─────

*Nama :* ${json.result.name}
*Tahun Kelahiran :* ${json.result.tahun_kelahiran}
*Usia* ${json.result.age}
*Tempat :* ${json.result.place}
*Kisah :* ${json.result.story}
`)
// conn.sendFile(m.chat, buffer, 'hasil.jpg', "Nih kk KTP nya ", m)
}
handler.help = ['kisahnabi <nama>']
handler.command = ['kisahnabi']
handler.tags = ['islam']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler

