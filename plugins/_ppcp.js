let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch(`https://api.botcahx.live/api/randomgambar/couplepp?apikey=${btc}`)
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
await m.reply(wait)
conn.sendFile(m.chat, json.result.female,  'pp.jpg', 'Nih PP Cewenya', m)
conn.sendFile(m.chat, json.result.male,'pria.jpg',  'Nih PP Cowonya', m)

}

handler.help = ['ppcp']
handler.tags = ['internet']
handler.command = /^ppcp$/i
handler.register = true

module.exports = handler