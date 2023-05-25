let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command }) => {

  let anu = `┏━━━ꕥ〔 Fun Feature 〕ꕥ━⬣
┃✦  .cekpacar (Ⓛ)
┃✦  .alay
┃✦  .alay (Ⓛ)
┃✦  .namaninja <teks>
┃✦  .purba <teks>
┃✦  .meme (Ⓛ)
┃✦  .pick <jumlah> <teks>
┃✦  .putus (Ⓛ)
┃✦  .simi <teks>
┃✦  .simsimi <teks>
┃✦  .simih <teks>
┃✦  .taugasih (Ⓛ)
┃✦  .tembak @tag (Ⓛ)
┃✦  .terima @tag (Ⓛ)
┃✦  .tolak @tag (Ⓛ)
┃✦  .dare (Ⓛ)
┃✦  .truth (Ⓛ)
┃✦  .zodiac 2002 02 25
┗━━━━━━━━━ꕥ`
conn.reply(m.chat, anu, m) 
}


handler.help = ['funfeature']
handler.tags = ['simple']
handler.command = /^(funfeature)$/i

handler.limit = false
handler.register = true
handler.exp = 3

module.exports = handler

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    wishloc = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    wishloc = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam🌙')
  }
  return wishloc
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
