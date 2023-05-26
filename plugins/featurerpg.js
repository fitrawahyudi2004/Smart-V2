let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command, usedPrefix }) => {

  let anu = `┏━━━ꕥ〔 Rpg Feature 〕ꕥ━⬣
┃✦  ${usedPrefix}open <crate>
┃✦  ${usedPrefix}gacha <crate>
┃✦  ${usedPrefix}bank
┃✦  ${usedPrefix}dompet
┃✦  ${usedPrefix}dompet @user
┃✦  ${usedPrefix}berdagang @tag (Ⓛ)
┃✦  ${usedPrefix}berkebon (Ⓛ)
┃✦  ${usedPrefix}build <args>
┃✦  ${usedPrefix}upgrade <sell|buy> <args>
┃✦  ${usedPrefix}membunuh @tag (Ⓛ)
┃✦  ${usedPrefix}casino <jumlah> (Ⓛ)
┃✦  ${usedPrefix}collect
┃✦  ${usedPrefix}feed [pet type]
┃✦  ${usedPrefix}fishop <sell|buy>  <item> <args>
┃✦  ${usedPrefix}tokoikan <sell|buy> <item> <args>
┃✦  ${usedPrefix}inv (Ⓛ)
┃✦  ${usedPrefix}judi <jumlah>
┃✦  ${usedPrefix}merampok @tag (Ⓛ)
┃✦  ${usedPrefix}nabung <jumlah>
┃✦  ${usedPrefix}narik <jumlah>
┃✦  ${usedPrefix}nguli
┃✦  ${usedPrefix}ojek
┃✦  ${usedPrefix}pasar <jual> <args>
┃✦  ${usedPrefix}transfer <Args>
┗━━━━━━━━━ꕥ`
conn.reply(m.chat, anu, m) 
}


handler.help = ['rpgfeature']
handler.tags = ['simple']
handler.command = /^(rpgfeature)$/i

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
