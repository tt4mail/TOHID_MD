const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *TOHID KHAN*

> *TOHID_MD REPO:*
*|* *https://github.com/Tohidkhan6332/TOHID_MD*

> *SUPPORT CHENNAL:*
*|* *https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T*
*╰──────────────●●►*

> *CREATED BY MR TOHID*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "TOHID KHAN",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SILENT-SOBX-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Tohidkhan6332/TOHID_MD" ,
thumbnailUrl: "https://i.imgur.com/M1BzE37.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
