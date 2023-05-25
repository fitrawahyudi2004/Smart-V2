let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command }) => {

  let anu = `┏━━━ꕥ〔 Rpg Feature 〕ꕥ━⬣
┃✦  .open <crate>
┃✦  .gacha <crate>
┃✦  .bank
┃✦  .dompet
┃✦  .dompet @user
┃✦  .berdagang @tag (Ⓛ)
┃✦  .berkebon (Ⓛ)
┃✦  .build <args>
┃✦  .upgrade <sell|buy> <args>
┃✦  .membunuh @tag (Ⓛ)
┃✦  .casino <jumlah> (Ⓛ)
┃✦  .collect
┃✦  .feed [pet type]
┃✦  .fishop <sell|buy>  <item> <args>
┃✦  .tokoikan <sell|buy> <item> <args>
┃✦  .inv (Ⓛ)
┃✦  .judi <jumlah>
┃✦  .merampok @tag (Ⓛ)
┃✦  .nabung <jumlah>
┃✦  .narik <jumlah>
┃✦  .nguli
┃✦  .ojek
┃✦  .pasar <jual> <args>
┃✦  .transfer <Args>
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
