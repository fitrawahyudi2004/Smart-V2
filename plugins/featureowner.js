let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command, usedPrefix }) => {

  let anu = `┏━━━ꕥ〔 Owner Feature 〕ꕥ━⬣
┃✦  ${usedPrefix}demote @user
┃✦  ${usedPrefix}promote @user
┃✦  ${usedPrefix}broadcast <teks>
┃✦  ${usedPrefix}bc <teks>
┃✦  ${usedPrefix}getdb <teks>
┃✦  ${usedPrefix}getdatabase <teks>
┃✦  ${usedPrefix}enable <option>
┃✦  ${usedPrefix}disable <option>
┃✦  ${usedPrefix}setwelcome <teks>
┃✦  ${usedPrefix}addowner [@user]
┃✦  ${usedPrefix}addprem [@user] <angka>
┃✦  ${usedPrefix}ban
┃✦  ${usedPrefix}bcgcbot <teks>
┃✦  ${usedPrefix}hapusprem [@user]
┃✦  ${usedPrefix}addsewa <hari>
┃✦  ${usedPrefix}getplugin [filename]
┃✦  ${usedPrefix}resetlimit
┃✦  ${usedPrefix}restart
┃✦  ${usedPrefix}self
┃✦  ${usedPrefix}public
┃✦  ${usedPrefix}setbye <teks>
┃✦  ${usedPrefix}setprefix [prefix]
┃✦  ${usedPrefix}sf <teks>
┃✦  ${usedPrefix}simulate <event> [@mention]
┃✦  ${usedPrefix}pushkontak
┃✦  ${usedPrefix}unban
┃✦  ${usedPrefix}unban
┗━━━━━━━━━ꕥ`
conn.reply(m.chat, anu, m) 
}


handler.help = ['ownerfeature']
handler.tags = ['simple']
handler.command = /^(ownerfeature)$/i

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
