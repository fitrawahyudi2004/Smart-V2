async function handler(m, { conn, text }) {
    conn.verify = conn.verify ? conn.verify : {}
    user = DATABASE.data.users
    kode = Math.floor(Math.random() * 99999999999999999999)
    if (user[m.sender].registered) return m.reply('Akun Kamu Sudah Terverifikasi dan terdaftar di *DATABASE* Smart Bot')
    aww = await m.reply('Kode Verifikasi Telah Dikirim Ke Chat Pribadi Anda, Balas Pesan Ini Menggunakan Kode Yang Telah Di Kirim Untuk Verifikasi!')
    m.reply(`Kode Verifikasi Anda Adalah *${kode}*\nJangan Berikan kepada Siapapun Maupun Owner!`, m.sender)
    conn.verify[m.sender] = { code: kode, key: aww.key.id }
}

handler.all = async m => {
    if (!conn.verify) return
    if (!m.quoted) return
    if ((m.sender in conn.verify) == false) return
    if (m.text == conn.verify[m.sender].code && m.quoted.id == conn.verify[m.sender].key) {
        m.reply('```Register Success!```')
        m.reply('```Terima Kasih sudah mendaftar di DATABASE SMART BOT```')
        DATABASE.data.users[m.sender].registered = true
        delete conn.verify[m.sender]
    }
}



handler.command = /^daftar$/i
module.exports = handler