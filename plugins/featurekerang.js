let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command }) => {

  let anu = `┏━━━ꕥ〔 Kerang Feature 〕ꕥ━⬣
┃✦  apakah <teks>?
┃✦  .gaycek
┃✦  .pintarcek
┃✦  .cantikcek
┃✦  .gantengcek
┃✦  .gabutcek
┃✦  .gilacek
┃✦  .lesbicek
┃✦  .stresscek
┃✦  .bucincek
┃✦  .jonescek
┃✦  .sadboycek
┃✦  .howgay siapa?
┃✦  .howpintar siapa?
┃✦  .howcantik siapa?
┃✦  .howganteng siapa?
┃✦  .howgabut siapa?
┃✦  .howgila siapa?
┃✦  .howlesbi siapa?
┃✦  .howstress siapa?
┃✦  .howbucin siapa?
┃✦  .howjones siapa?
┃✦  .howsadboy siapa?
┃✦  kapan <text>?
┃✦  kapankah <text>?
┗━━━━━━━━━ꕥ`
conn.reply(m.chat, anu, m) 
}


handler.help = ['kerangfeature']
handler.tags = ['simple']
handler.command = /^(kerangfeature)$/i

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
