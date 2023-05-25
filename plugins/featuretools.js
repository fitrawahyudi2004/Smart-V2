let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command }) => {

  let anu = `┏━━━ꕥ〔 Tools Feature 〕ꕥ━⬣
┃✦  .brainly (Ⓛ)
┃✦  .igstalk <username> (Ⓛ)
┃✦  .yts <pencarian>
┃✦  .ytsearch <pencarian>
┃✦  .githubsearch <pencarian>
┃✦  .trad <leng> <text>
┃✦  .lihatpp [@user]
┃✦  .tahta <teks>
┃✦  .tts <teks>
┃✦  .apk (kata kunci)
┃✦  .base64
┃✦  .binary <teks>
┃✦  .encrypt
┃✦  .font <text> (Ⓛ)
┃✦  .styletext <text> (Ⓛ)
┃✦  .halah <teks>
┃✦  .hilih <teks>
┃✦  .huluh <teks>
┃✦  .heleh <teks>
┃✦  .holoh <teks>
┃✦  .kalkulator <soal>
┃✦  .npmsearch
┃✦  .ocr (Ⓛ)
┃✦  .totext (Ⓛ)
┃✦  .qr <teks>
┃✦  .qrcode <teks>
┃✦  .react <emoji>
┃✦  .readmore <teks>|<teks>
┃✦  .repeat <teks> (Ⓛ)
┃✦  .say <teks>
┃✦  .sshp (Ⓛ)
┃✦  .sshandphone (Ⓛ)
┃✦  .sstablet (Ⓛ)
┃✦  .ssweb (Ⓛ)
┃✦  .sshp (Ⓛ)
┃✦  .sspc (Ⓛ)
┃✦  .tomp3 (reply)
┃✦  .ceknomor
┃✦  .truecaller
┃✦  .unbanwa
┃✦  .whois
┃✦  .whoislookup
┃✦  .zodiac 2002 02 25
┗━━━━━━━━━ꕥ`
conn.reply(m.chat, anu, m) 
}


handler.help = ['toolsfeature']
handler.tags = ['simple']
handler.command = /^(toolsfeature)$/i

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
