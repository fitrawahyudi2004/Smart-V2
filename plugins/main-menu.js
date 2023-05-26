const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
process.env.TZ = 'Asia/Jakarta'
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')

let tags = {
  'simple': 'SIMPLE FEATURE',
  'main': 'FEATURE UTAMA',
  'ai': 'FEATURE AI', 
  'admin': 'ADMIN FEATURE',
  'owner': 'FEATURE OWNER',
  'downloader': 'FEATURE DOWNLOADER',
  'sticker': 'FEATURE CONVERT',
  'xp': 'FEATURE XP',
  'game': 'FEATURE GAME',
  'random': 'FEATURE RANDOM',
  'islam': 'ISLAMIC FEATURE',
  'fun': 'FEATURE FUN',
  'github': 'FEATURE GITHUB',
  'group': 'FEATURE GROUP',
  'info': 'FEATURE INFO',
  'internet': 'INTERNET',
  'anon': 'ANONYMOUS',
  'kerang': 'FEATURE KERANG',
  'maker': 'FEATURE MAKER',
  'Pengubah Suara': 'PENGUBAH SUARA',
  'premium': 'PREMIUM FEATURE',
  'quotes' : 'FEATURE QUOTES',
  'rpg': 'FEATURE RPG',
  'stalk': 'FEATURE STALK',
  'shortlink': 'SHORT LINK',
  'tools': 'FEATURE TOOLS',
}
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

const ultah = new Date('November 19 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
const idulFitri = new Date('April 8 2024 23:59:59')
    const sekirit = new Date().getTime() 
    const Kurangg = idulFitri - sekirit
    const oohari = Math.floor( Kurangg / (1000 * 60 * 60 * 24));
    const oojam = Math.floor( Kurangg % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const oonet = Math.floor( Kurangg % (1000 * 60 * 60) / (1000 * 60))
    const odetek = Math.floor( Kurangg % (1000 * 60) / 1000)
const ramadhan = new Date('Maret 9 2024 23:59:59')
    const sekiritt = new Date().getTime() 
    const oKurangg = ramadhan - sekiritt
    const ooohari = Math.floor( oKurangg / (1000 * 60 * 60 * 24));
    const ooojam = Math.floor( oKurangg % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const ooonet = Math.floor( oKurangg % (1000 * 60 * 60) / (1000 * 60))
    const oodetek = Math.floor( oKurangg % (1000 * 60) / 1000)
    const owners = global.nameowner
    const nameBot = global.namebot
let handler = async (m, { conn, usedPrefix: _p }) => {
      try {
      let usrs = db.data.users[m.sender]   
  
const defaultMenu = {
  before: `
Halo kak, @${m.sender.split`@`[0]} Selamat %ucpn

%dash

%m1 *B O T  I N F O*
%m2 Name : ${nameBot}
%m2 Uptime : %uptime 
%m2 Library : Baileys Multi Device
%m2 Version : %versi
%m2 Prefix Used : *[ %p ]*
%m2 Database : %rtotalreg dari %totalreg 
%m2 Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
%m2 Battery: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'Tidak Di ketahui'}
%m3

%m1 *O W N E R  I N F O*
%m2 Nama : ${owners}
%m2 Nomor : wa.me/%noOwn
%m2 Tanggal Lahir : %lahir
%m2 Ulang Tahun : ${ohari} Hari, ${ojam} Jam, ${onet} Menit, ${detek} Detik
%m3

%m1 *D E T A I L  P E N G G U N A*
%m2 Nomor Pengguna :  %name 
%m2 Status : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
%m2 Premium : %prems
%m2 Role : %role
%m2 Level : %level (%exp / %maxexp) %xp4levelup
%m2 Total XP : %totalexp XP
%m2 Limit : %limit / day
%m2 Exp : %totalexp
%m2 Level : %level
%m2 Role : %role
%m3

%m1 *T I M E*
%m2 Tanggal : %date
%m2 Tanggal Islam: %dateIslamic
%m2 Hari : %week 
%m2 Weton : %weton
%m2 WIB   : %time
%m2 WITA : ${wita}
%m2 WIT   : ${wit}
%m3

%m1 *I N F O  L A I N N Y A*
%m2 Ramadhan 2024 : ${ooohari} Hari, ${ooojam} Jam, ${ooonet} Menit, ${oodetek} Detik
%m2 Idul Fitri 2024 : ${oohari} Hari, ${oojam} Jam, ${oonet} Menit, ${odetek} Detik
%m3

%m1 *I N F O  C M D*
%m2 *Ⓟ* = Premium
%m2 *Ⓛ* = Limit
%m3
`.trimStart(),
  header: '%cc %category %c1',
  body: '%c2 %cmd %islimit %isPremium',
  footer: '%c3',
  after: `Expired Premium : \n${clockStringP(usrs.premiumTime - new Date())} : ''}\n%c4\n*Powered by %wm3*`,
}

    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    
    let d = new Date(new Date + 3600000)
    let lahir = global.lahir
    let names = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)   
   
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Yes': 'No'}`
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let versi = global.versi
    let noOwn = global.nomorown
    // DEFAULT MENU
    let dash = global.dashmenu
    let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      // WM
      let wm3 = global.wm3
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

      	

    let ucpn = `${ucapan()}`
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, versi, lahir, prems, ucpn, dash, wm3, noOwn, m1, m2, m3, m4, cc, c1, c2, c3, c4, lprem, llim, names, name, weton, week, date, dateIslamic, wib, wit, wita, prems, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: date,
body: 'bodynya',
thumbnailUrl: "https://i.postimg.cc/Zqx80YRQ/1.webp",
sourceUrl: "https://chat.whatsapp.com/Hvkzf6lLjLRHjtd67G1gfL",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
      /**const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 9999999999999,
                            status: 1,
                            surface : 1,
                            message: wm,
                            orderTitle: 'MENU',
                            thumbnail: await (await fetch('https://telegra.ph/file/f4063ab3071f5c4af765a.png')).buffer(),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
await conn.sendFile(m.chat, 'https://telegra.ph/file/dc5a67d724b016574129b.jpg', 'menu.jpg', text, ftroli)**/
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(allfeature)$/i

handler.exp = 3
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
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