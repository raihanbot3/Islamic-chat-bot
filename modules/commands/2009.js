const dipto = require('axios');
const fs = require('fs-extra');
const pathFile = __dirname + '/cache/d1p.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "🍒",
  version: "1.0.0",
  hasPermission: 0,
  credits: "dipto",
  usePrefix: false,
  description: "when send ,🍒 then response",
  commandCategory: "no prefix",
  usages: "🍒",
  cooldowns: 1,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
  const text = ["╭•┄┅════❁🌺❁════┅┄•╮\n\n🪄🩶🩷\n\n𝙄 𝙡𝙤𝙫𝙚 𝙮𝙤𝙪 𝗔𝗹𝗹𝗮𝗵 𝙙𝙚𝙨𝙥𝙞𝙩𝙚 𝙩𝙝𝙚 𝙝𝙪𝙣𝙙𝙧𝙚𝙙𝙨 𝙤𝙛🩷 𝙖𝙡𝙩𝙚𝙧𝙣𝙖𝙩𝙞𝙫𝙚𝙨🍒🪄🩶\n\nশ'ত শ'ত বিকল্প থাকার সত্ত্বেও আমি আপনাকেই ভালোবাসি আল্লাহ'🩷😻✨\n\n🪄🩶🩷 \n\n╰•┄┅════❁🌺❁════┅┄•╯", "╭•┄┅════❁🌺❁════┅┄•╮\n\n╰•┄┅════❁🌺❁════┅┄•╯"]
  const text2 = text[Math.floor(Math.random() * text.length)];
const imgur = ["https://i.imgur.com/jOwRcqi.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
  const filename = __dirname + `/cache/rajib.mp4`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.includes("🍒") || dipto2.includes("🍒") || dipto2.includes("🍒"))
  {
api.sendMessage({body:`${text2}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
  }
  }
}
module.exports.run = async ({api,args, event}) => {
try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('no prefix on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('no prefix off successfully', event.threadID, event.messageID);
  }
  else {
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }

}