const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
process.env.TZ = 'Asia/Jakarta'
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let tags = {
  'main': 'MENU UTAMA',
  'ai': 'MENU AI', 
  'downloader': 'MENU DOWNLOADER',
  'sticker': 'MENU CONVERT',
  'xp': 'MENU EXP',
  'admin': 'ADMIN MENU',
  'islam': 'ISLAM MENU',
  'fun': 'MENU FUN',
  'videomaker': 'VIDEO MAKER',
  'game': 'MENU GAME',
  'github': 'MENU GITHUB',
  'group': 'MENU GROUP',
  'info': 'MENU INFO',
  'internet': 'INTERNET',
  'anon': 'ANONYMOUS',
  'kerang': 'MENU KERANG',
  'maker': 'MENU MAKER',
  'owner': 'MENU OWNER',
  'Pengubah Suara': 'PENGUBAH SUARA',
  'premium': 'PREMIUM MENU',
  'quotes' : 'MENU QUOTES',
  'rpg': 'MENU RPG',
  'stalk': 'MENU STALK',
  'shortlink': 'SHORT LINK',
  'tools': 'MENU TOOLS',
  'asupan': 'ASUPAN MENU' 
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
const defaultMenu = {
  before: `
Halo kak Selamat %ucpn

*•━━━━ ❮❮ BOT INFO ❯❯ ━━━━━•*
⌬ Name : ${nameBot}
⌬ Uptime : %uptime 
⌬ Library : Baileys Multi Device
⌬ Version : %version
⌬ Prefix Used : *[ %p ]*
⌬ Database : %rtotalreg dari %totalreg 
⌬ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
⌬ Battery: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'Tidak Di ketahui'}

*•━━ ❮❮ OWNER INFO ❯❯ ━━•*
⌬ Nama : ${owners}
⌬ Nomor : wa.me/62181262166032
⌬ Tanggal Lahir : 20 November 2004
⌬ Ulang Tahun : ${ohari} Hari, ${ojam} Jam, ${onet} Menit, ${detek} Detik

*•━━ ❮❮ DETAIL USER ❯❯ ━━•*
⌬ Nomor Pengguna :  %name 
⌬ Status : %prems
⌬ Role : %role
⌬ Level : %level (%exp / %maxexp) %xp4levelup
⌬ Total XP : %totalexp XP
⌬ Limit : %limit / day
⌬ Exp : %totalexp
⌬ Level : %level
⌬ Role : %role

*•━━ ❮❮ TIME ❯❯ ━━•*
⌬ Tanggal : %date
⌬ Tanggal Islam: %dateIslamic
⌬ Hari : %week 
⌬ Weton : %weton
⌬ WIB   : %time
⌬ WITA : ${wita}
⌬ WIT   : ${wit}

*•━━ ❮❮ INFO LAINNYA ❯❯ ━━•*
⌬ Ramadhan 2024 : ${ooohari} Hari, ${ooojam} Jam, ${ooonet} Menit, ${oodetek} Detik
⌬ Idul Fitri 2024 : ${oohari} Hari, ${oojam} Jam, ${oonet} Menit, ${odetek} Detik

*•━━ ❮❮ INFO COMMAND ❯❯ ━━•*
*Ⓟ* = Premium
*Ⓛ* = Limit
`.trimStart(),
  header: '*•━ ❮❮ %category ❯❯ ━•*',
  body: '⌬ %cmd %islimit %isPremium',
  footer: '',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let names = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)   
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Free':'Premium'}`
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
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
      level, limit, ucpn, names, name, weton, week, date, dateIslamic, wib, wit, wita, prems, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: date,
body: 'bodynya',
thumbnailUrl: "https://i.postimg.cc/hGRXnJqw/sa.png",
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
handler.command = /^(allmenu|menu|help|tod|menunya)$/i

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