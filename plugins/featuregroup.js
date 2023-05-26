let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command, usedPrefix }) => {

  let anu = `┏━━━ꕥ〔 Group Feature 〕ꕥ━⬣
┃✦  ${usedPrefix}demote @user
┃✦  ${usedPrefix}getpp <@tag/reply>
┃✦  ${usedPrefix}promote @user
┃✦  ${usedPrefix}enable <option>
┃✦  ${usedPrefix}disable <option>
┃✦  ${usedPrefix}gcsider
┃✦  ${usedPrefix}hidetag <pesan>
┃✦  ${usedPrefix}infogrup
┃✦  ${usedPrefix}linkgroup
┃✦  ${usedPrefix}setppgc
┃✦  ${usedPrefix}grup <open/close>
┃✦  ${usedPrefix}setwelcome <teks>
┃✦  ${usedPrefix}tagadmin
┃✦  ${usedPrefix}tagall <pesan>
┃✦  ${usedPrefix}tagme
┃✦  ${usedPrefix}totalpesan
┃✦  ${usedPrefix}grouplist
┃✦  ${usedPrefix}kick @user
┃✦  ${usedPrefix}listadmin
┃✦  ${usedPrefix}setbye <teks>
┃✦  ${usedPrefix}tagadmin
┃✦  ${usedPrefix}min
┃✦  ${usedPrefix}unban
┃✦  ${usedPrefix}unban
┗━━━━━━━━━ꕥ`
conn.reply(m.chat, anu, m) 
}


handler.help = ['groupfeature']
handler.tags = ['simple']
handler.command = /^(groupfeature)$/i

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
