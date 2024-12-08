/* 
created by TOHID KHAN
contact me 917849917350
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name      : ᴛᴏʜɪᴅ-ᴋʜᴀɴ
 ◈ •│
 ◈ •│ Place      : ɪɴᴅɪᴀ
 ◈ •│
 ◈ •│ Gender    : ᴍᴀʟᴇ
 ◈ •│
 ◈ •│ Age       : 19_
 ◈ •│
 ◈ •│ Status     : 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁
 ◈ •│
 ◈ •│ Phone     : wa.me/917849917350
 ◈ •│
 ◈ •│ IG ID      : Tohidkhan6332
 ◈ •│
 ◈ •│ Connect   : https://tg-contact-form.vercel.app/
 ◈ •│
 ◈ •│ Github     : Tohidkhan6332
 ◈ •│
 ◈ •│ Website    : https://tohid-web.vercel.app/
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ • *◆◆◆◆◆◆◆◆◆◆◆◆*

 ◈ •*[ • TOHID_MD - TEAM • ]*
 ◈ •*╭┈───────────────•*
 ◈ •*│  ◦* *▢➠ᴛᴏʜɪᴅ ᴋʜᴀɴ*
 ◈ •*│  ◦* *▢➠ꜱᴀɴᴀ ᴋʜᴀɴ*
 ◈ •*│  ◦* *▢➠ꜱʜᴀʜ ꜰᴀɪꜱᴀʟ*
 ◈ •*│  ◦* *▢➠Qᴜᴇᴇɴ ᴋᴏꜰɪᴀ*
 ◈ •*│  ◦* *▢➠ɴɪᴍʀᴀ Qᴜᴇᴇɴ*
 ◈ •*╰┈───────────────•*
 ◈ •*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴏʜɪᴅ ᴋʜᴀɴ
 ◈ •*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
