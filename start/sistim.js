/*

# Created By KyuuRzy
# Contact ? : t.me/KyuuDev

# Thanks For Devorsixcore
# Contact ? : t.me/imdevorsix
!- do not delete this credit
!- don't sell it, let alone distribute it
.
© developed by kyzryzz.t.me
*/

const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys")
const fs = require("fs")
const { randomBytes } = require("crypto");
const { getBuffer, sleep } = require("./lib/myfunction")
const { tmpdir } = require("os")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
require("../setting/config")

exports.sendAnnotations = async (Kyzz, jid, videoUrl, text) => {
   await Kyzz.sendMessage(jid, {
                video: { url: videoUrl },  
                mimetype: "video/mp4",
                interactiveAnnotations: [
                    {
                        polygonVertices: [
                            { x: 60.71664810180664, y: -36.39784622192383 },
                            { x: -16.710189819335938, y: 49.263675689697266 },
                            { x: -56.585853576660156, y: 37.85963439941406 },
                            { x: 20.840980529785156, y: -47.80188751220703 }
                        ],
                        location: {
                            degreesLatitude: -7.64780786537579,
                            degreesLongitude: 111.51515875252841,
                            name: text
                        }
                    }
                ],
            },
            {}
        );
}

exports.editmsg = async (Kyzz, jid, e, t) => {
var a = [`${e}.`, `${e}..`, `${e}...`, `${e}.....`, `${t}`];
let { key: s } = await Kyzz.sendMessage(jid, {text: e});
for (let r = 0; r < a.length; r++) await Kyzz.sendMessage(jid, {text: a[r], edit: s
})
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})