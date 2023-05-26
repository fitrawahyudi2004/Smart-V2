let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command, usedPrefix }) => {

  let anu = `┏━━━ꕥ〔 Internet Feature 〕ꕥ━⬣
┃✦  ${usedPrefix}buatcatatan <title|isi>
┃✦  ${usedPrefix}hapuscatatan title
┃✦  ${usedPrefix}lihatcatatan <title>
┃✦  ${usedPrefix}ppcp
┃✦  ${usedPrefix}china
┃✦  ${usedPrefix}indonesia
┃✦  ${usedPrefix}japan
┃✦  ${usedPrefix}vietnam
┃✦  ${usedPrefix}thailand
┃✦  ${usedPrefix}korea
┃✦  ${usedPrefix}malaysia
┃✦  ${usedPrefix}pinterest <keyword>
┃✦  ${usedPrefix}yts <pencarian>
┃✦  ${usedPrefix}ytsearch <pencarian>
┃✦  ${usedPrefix}animal <hewan>
┃✦  ${usedPrefix}fetch <url>
┃✦  ${usedPrefix}get <url>
┃✦  ${usedPrefix}image <query>
┃✦  ${usedPrefix}gimage <query>
┃✦  ${usedPrefix}googleimage <query>
┃✦  ${usedPrefix}google <pencarian>
┃✦  ${usedPrefix}googlef <pencarian>
┃✦  ${usedPrefix}kodebahasa
┃✦  ${usedPrefix}lirik <Apa>
┃✦  ${usedPrefix}dnslookup
┃✦  ${usedPrefix}hackertarget
┃✦  ${usedPrefix}lookup
┃✦  ${usedPrefix}dns
┃✦  ${usedPrefix}getsesi
┃✦  ${usedPrefix}katabijak <opsi>
┃✦  ${usedPrefix}stickerpack <Apa>
┃✦  ${usedPrefix}short <url> <type>
┃✦  ${usedPrefix}zodiac 2002 02 25
┗━━━━━━━━━ꕥ`
conn.reply(m.chat, anu, m) 
}


handler.help = ['internetfeature']
handler.tags = ['simple']
handler.command = /^(internetfeature)$/i

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
