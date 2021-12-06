let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
會⸦⸧︻︻︻︻︻︻︻︻︻︻⸦⸧會
⦕ *Informasi Owner* ⦖
會⸦⸧︼︼︼︼︼︼︼︼︼︼⸦⸧會
⎛ ۞⃝ Nama : Taufiqurrohman/oᵖ ͥͥ ᷜᷜ
▏    Kelas : X-MIPA 5,SMA 1 Lmd
▏    Umur : 15
▏    Asal : Majalengka 
▏    Status : Sibuk.
▏    Suka : Kamu, Coding (dikit), Sejarah
▏ ۞⃝ _Official Grup_ :
▏    bit.ly/Groupkhusus
▏ ۞⃝ _Instagram_ :
▏    -
▏ ۞⃝ _YouTube_ : 
▏    bit.ly/YouTubeopik
▏ ۞⃝ _FaceBook_ :
▏    bit.ly/Facebookopik
▏ ۞⃝ _WhatsApp_ :
▏    bit.ly/WhatsAppopik
⎝◞°°°°°°°°𖤓⃝
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main']
handler.command = /^(infoowner)$/i

handler.exp = 1000

module.exports = handler
