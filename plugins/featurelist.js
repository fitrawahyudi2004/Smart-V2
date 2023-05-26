let fetch = require('node-fetch')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, command, usedPrefix }) => {
  let ucpn = `${ucapan()}`
  function ucapan() {
    const hour_now = moment.tz('Asia/Jakarta').format('HH')
    var ucapanWaktu = 'Pagi'
    if (hour_now >= '03' && hour_now <= '10') {
      ucapanWaktu = 'Pagi'
    } else if (hour_now >= '10' && hour_now <= '15') {
      ucapanWaktu = 'Siang'
    } else if (hour_now >= '15' && hour_now <= '17') {
      ucapanWaktu = 'Sore'
    } else if (hour_now >= '17' && hour_now <= '18') {
      ucapanWaktu = 'Selamat Petang'
    } else if (hour_now >= '18' && hour_now <= '23') {
      ucapanWaktu = 'Malam'
    } else {
      ucapanWaktu = 'Selamat Malam'
    }	
    return ucapanWaktu
  }
  let anu = `
  Halo Kak @${m.sender.split`@`[0]}, Selamat ${ucpn}

  Di bawah ini adalah List Feature yang ada di Smart Bot V7

┏━━━ꕥ〔 List Feature 〕ꕥ━⬣
┃✾ ${usedPrefix}mainfeature
┃✾ ${usedPrefix}aifeature
┃✾ ${usedPrefix}adminfeature
┃✾ ${usedPrefix}ownerfeature
┃✾ ${usedPrefix}downloaderfeature
┃✾ ${usedPrefix}stickerfeature
┃✾ ${usedPrefix}xpfeature
┃✾ ${usedPrefix}gamefeature
┃✾ ${usedPrefix}islamicfeature
┃✾ ${usedPrefix}funfeature
┃✾ ${usedPrefix}githubfeature
┃✾ ${usedPrefix}groupfeature
┃✾ ${usedPrefix}infofeature
┃✾ ${usedPrefix}internetfeature
┃✾ ${usedPrefix}anonfeature
┃✾ ${usedPrefix}kerangfeature
┃✾ ${usedPrefix}makerfeature
┃✾ ${usedPrefix}voicechangerfeature
┃✾ ${usedPrefix}premiumfeature
┃✾ ${usedPrefix}quotesfeature
┃✾ ${usedPrefix}rpgfeature
┃✾ ${usedPrefix}randomfeature
┃✾ ${usedPrefix}stalkfeature
┃✾ ${usedPrefix}shortlinkfeature
┃✾ ${usedPrefix}toolsfeature
┗━━━━━━━━━ꕥ
┏━━━ꕥ〔 All Feature 〕ꕥ━⬣
┃✾ .allfeature
┗━━━━━━━━━ꕥ

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

 Powered  By FWD`

conn.reply(m.chat, anu, m) 
}


handler.help = ['listfeature']
handler.tags = ['main']
handler.command = /^(open|list)(feature)$/i

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
