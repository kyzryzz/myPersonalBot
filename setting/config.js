const fs = require('fs')

global.status = false //"self/public" section of the bot

global.d = new Date()
global.calender = d.toLocaleDateString('id')

    //General Settings 
global.prefix = global.prefa = ['','!','.',',','🐤','🗿']
global.owner = '6285921655444'
global.sessionName = 'session'
global.botname = 'KyZ'
global.author = 'Sticker by ⚗ Kyzryzz'
global.packname = ''
global.bodyfooter = global.footer = '⚗ KyZ Asisstant'
global.idch = '120363316387241559@newsletter'
global.ch = 'https://whatsapp.com/channel/0029VaoiPTsK0IBkBFCels2D'
global.email = 'kyzuuryz@contaxt.xyz'

global.thumbnail = "https://files.catbox.moe/bos3vr.jpg"
global.isBot = false

global.urldb = ""

global.mess = {
ingroup: "It's not funny, this feature is only for groups💢",
admin: "not funny, only group admins use this feature💢",
owner: "Wow! You're not my owner🗣️",
premium: "you are not a premium user",
seller: "You don't have access as a seller yet",
wait: "⏱️ Please wait", 
donech: `✔ Done, media has been successful sent to ${global.ch}`
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
