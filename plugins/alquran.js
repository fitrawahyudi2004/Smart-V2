let fetch = require('node-fetch')
let handler = async (m, { conn, command, args,usedPrefix }) => {
response = args.join(' ').split('|')
if (!(args[0] || args[1])) throw `contoh:\n\n${usedPrefix + command} 1|2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetch(`https://quran-api-id.vercel.app/surahs/${response[0]}/ayahs/${response[1]}`)
let json = await res.json()
let img = json.image.secondary
let anu = (` 
─────〔 *Alquran Digital* 〕─────

${json.arab}

*Surah ke* : ${json.number.inSurah}
*Ayat Ke :* ${json.number.inQuran} dalam Alquran
*Juz Ke :* ${json.meta.juz}
*Halaman ke :* ${json.meta.page}
*Artinya :* ${json.translation}
*Tafsir Kemenag:* ${json.tafsir.kemenag.long}

*Tafsir Quraish Syihab:* ${json.tafsir.quraish}

*Tafsir Jalalayn :* ${json.tafsir.jalalayn}
`.trim())
conn.sendFile(m.chat, img, 'hasil.jpg', anu, m)
conn.sendFile(m.chat, json.audio.alafasy, 'audio.mp3', m)

}
handler.help = ['alquran <namasurah|ayat ke>']
handler.tags = ['islam']
handler.command = /^alquran$/i

handler.split = true


module.exports = handler