let handler = async (m, { conn }) => {
let beks = [
'https://s5.ttsmaker.com/file/2023-05-30-003304_107191.mp3',
'https://s5.ttsmaker.com/file/2023-05-30-003602_168962.mp3',
'https://s5.ttsmaker.com/file/2023-05-30-003802_163685.mp3',
'https://s2p1.ttsmaker.com/file/2023-05-30-003854_147735.mp3',
'https://s2p1.ttsmaker.com/file/2023-05-30-004342_195658.mp3']
let bek = beks[Math.floor(Math.random() * beks.length)]   
conn.sendFile(m.chat, bek, "nih.mp3", m)
}
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler