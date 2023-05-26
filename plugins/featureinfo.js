let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command, usedPrefix }) => {

  let anu = `┏━━━ꕥ〔 Information Feature 〕ꕥ━⬣
┃✦  ${usedPrefix}disk
┃✦  ${usedPrefix}infogempa (Ⓛ) (Ⓟ)
┃✦  ${usedPrefix}gempa (Ⓛ) (Ⓟ)
┃✦  ${usedPrefix}bannedlist
┃✦  ${usedPrefix}owner (Ⓛ)
┃✦  ${usedPrefix}creator (Ⓛ)
┃✦  ${usedPrefix}database
┃✦  ${usedPrefix}user
┃✦  ${usedPrefix}bug <laporan>
┃✦  ${usedPrefix}report <laporan>
┃✦  ${usedPrefix}runtime
┃✦  ${usedPrefix}speedtest
┃✦  ${usedPrefix}status
┃✦  ${usedPrefix}statusbot
┃✦  ${usedPrefix}botstatus
┃✦  ${usedPrefix}totalfitur
┃✦  ${usedPrefix}covid <negara>
┃✦  ${usedPrefix}cuaca
┃✦  ${usedPrefix}blocklist
┃✦  ${usedPrefix}donasi
┃✦  ${usedPrefix}donate
┃✦  ${usedPrefix}owner
┃✦  ${usedPrefix}creator
┃✦  ${usedPrefix}premlist [angka]
┃✦  ${usedPrefix}ping
┃✦  ${usedPrefix}speed
┃✦  ${usedPrefix}profile [@user] (Ⓛ)
┗━━━━━━━━━ꕥ`
conn.reply(m.chat, anu, m) 
}


handler.help = ['infofeature']
handler.tags = ['simple']
handler.command = /^(infofeature)$/i

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
