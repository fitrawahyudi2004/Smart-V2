let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command, usedPrefix }) => {

  let anu = `┏━━━ꕥ〔 Tools Feature 〕ꕥ━⬣
┃✦  ${usedPrefix}brainly (Ⓛ)
┃✦  ${usedPrefix}igstalk <username> (Ⓛ)
┃✦  ${usedPrefix}yts <pencarian>
┃✦  ${usedPrefix}ytsearch <pencarian>
┃✦  ${usedPrefix}githubsearch <pencarian>
┃✦  ${usedPrefix}trad <leng> <text>
┃✦  ${usedPrefix}lihatpp [@user]
┃✦  ${usedPrefix}tahta <teks>
┃✦  ${usedPrefix}tts <teks>
┃✦  ${usedPrefix}apk (kata kunci)
┃✦  ${usedPrefix}base64
┃✦  ${usedPrefix}binary <teks>
┃✦  ${usedPrefix}encrypt
┃✦  ${usedPrefix}font <text> (Ⓛ)
┃✦  ${usedPrefix}styletext <text> (Ⓛ)
┃✦  ${usedPrefix}halah <teks>
┃✦  ${usedPrefix}hilih <teks>
┃✦  ${usedPrefix}huluh <teks>
┃✦  ${usedPrefix}heleh <teks>
┃✦  ${usedPrefix}holoh <teks>
┃✦  ${usedPrefix}kalkulator <soal>
┃✦  ${usedPrefix}npmsearch
┃✦  ${usedPrefix}ocr (Ⓛ)
┃✦  ${usedPrefix}totext (Ⓛ)
┃✦  ${usedPrefix}qr <teks>
┃✦  ${usedPrefix}qrcode <teks>
┃✦  ${usedPrefix}react <emoji>
┃✦  ${usedPrefix}readmore <teks>|<teks>
┃✦  ${usedPrefix}repeat <teks> (Ⓛ)
┃✦  ${usedPrefix}say <teks>
┃✦  ${usedPrefix}sshp (Ⓛ)
┃✦  ${usedPrefix}sshandphone (Ⓛ)
┃✦  ${usedPrefix}sstablet (Ⓛ)
┃✦  ${usedPrefix}ssweb (Ⓛ)
┃✦  ${usedPrefix}sshp (Ⓛ)
┃✦  ${usedPrefix}sspc (Ⓛ)
┃✦  ${usedPrefix}tomp3 (reply)
┃✦  ${usedPrefix}ceknomor
┃✦  ${usedPrefix}truecaller
┃✦  ${usedPrefix}unbanwa
┃✦  ${usedPrefix}whois
┃✦  ${usedPrefix}whoislookup
┃✦  ${usedPrefix}zodiac 2002 02 25
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
