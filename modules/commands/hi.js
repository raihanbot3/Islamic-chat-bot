module.exports.config = {
  name: "time",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Islamick Chat", 
  description: "wach time",
  commandCategory: "timer",
  usages: "time",
  cooldowns: 5,
  depndencies: {
      "axios": ""
  }
};

module.exports.run = async function ({ api, event,args,client,Users,Threads,__GLOBAL,Currencies }) {
 const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
  const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const moment = require("moment-timezone"); 
  var vthien = moment.tz('Asia/Dhaka').format('HH 𝐇𝐎𝐔𝐑 mm 𝐌𝐈𝐍𝐔𝐓𝐄  ss 𝐒𝐄𝐂𝐎𝐍𝐃  𝐃𝐀𝐘 DD 𝐌𝐎𝐍𝐓𝐇 MM  𝐘𝐄𝐀𝐑 YYYY');
var thu =
moment.tz('Asia/Dhaka').format('dddd');
if (thu == 'Sunday') thu = '𝐒𝐔𝐍𝐃𝐀𝐘'
if (thu == 'Monday') thu = '𝐌𝐎𝐍𝐃𝐀𝐘'
if (thu == 'Tuesday') thu = '𝐓𝐔𝐄𝐒𝐃𝐀𝐘'
if (thu == 'Wednesday') thu = '𝐖𝐄𝐃𝐍𝐄𝐒𝐃𝐀𝐘'
if (thu == "Thursday") thu = '𝐓𝐇𝐔𝐑𝐒𝐃𝐀𝐘'
if (thu == 'Friday') thu = '𝐅𝐑𝐈𝐃𝐀𝐘'
if (thu == 'Saturday') thu = '𝐒𝐀𝐓𝐔𝐑𝐃𝐀𝐘'
  const dateNow = Date.now();
  const time = process.uptime(),
        ti = Math.floor(time / (60 * 60)),
        en = Math.floor((time % (60 * 60)) / 60),
        tit = Math.floor(time % 60);
  const threadInfo = await api.getThreadInfo(event.threadID)
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
async function streamURL(url, mime='jpg') {
  const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
  downloader = require('image-downloader'),
  fse = require('fs-extra');
  await downloader.image({
      url, dest
  });
  setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
  return fse.createReadStream(dest);
};
      var getlink = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data;
      var day = getlink.data.date;
  var name = await Users.getNameUser(event.senderID);
  var tnt = event.senderID;
const res1 = await axios.get(`https://rajib-api.islam500.repl.co/ai`);
const res2 = await axios.get(`https://rajib-api.islam500.repl.co/ai`);
const res3 = await axios.get(`https://rajib-api.islam500.repl.co/ai`);
const res4 = await axios.get(`https://rajib-api.islam500.repl.co/ai`);
const res5 = await axios.get(`https://rajib-api.islam500.repl.co/ai`);
const res6 = await axios.get(`https://rajib-api.islam500.repl.co/ai`);
var data1 = res1.data.url;
var array = [];
var data2 = res2.data.url;
var data3 = res3.data.url;
var data4 = res4.data.url;
var data5 = res5.data.url;
var data6 = res6.data.url;
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
  array.push(downloadfile1);
  array.push(downloadfile2);
  array.push(downloadfile3);
  array.push(downloadfile4);
  array.push(downloadfile5);
  array.push(downloadfile6);
api.sendMessage({
    body:  `•—»✨ 𝗦𝗘𝗩𝗘𝗥 𝗧𝗜𝗠𝗘 ✨«—•\n•┄┅════❁🌺❁════┅┄•\n•—»✨ 𝐓𝐈𝐌𝐄: ${vthien}\n•—»✨ 𝐓𝐎𝐃𝐀𝐘 𝐈𝐒: ${thu}\n•—»✨ 𝐔𝐒𝐄𝐑: ${name}\n•—»✨ 𝐅𝐁 𝐈𝐃 𝐋𝐈𝐍𝐊: https://wwww.facebook.com/${tnt}\n•—»✨ 𝐔𝐈𝐃: ${tnt}\n•—»✨ 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐈𝐒 𝐎𝐍𝐋𝐈𝐍𝐄 𝐍𝐎𝐖: ${ti} 𝐇𝐎𝐔𝐑 ${en} 𝐌𝐈𝐍𝐔𝐓𝐄 ${tit} 𝐒𝐄𝐂𝐎𝐍𝐃\n•┄┅════❁🌺❁════┅┄•\n𝐑𝐄𝐋𝐄𝐀𝐒𝐄 𝐄𝐌𝐎𝐓𝐈𝐎𝐍𝐒 '🌺' 𝐓𝐎 𝐒𝐄𝐄 𝐓𝐈𝐌𝐄 𝐈𝐍 𝐎𝐓𝐇𝐄𝐑 𝐑𝐄𝐆𝐈𝐎𝐍𝐒`,attachment:
array},event.threadID, (err, info) => {
  global.client.handleReaction.push({
    name: this.config.name, 
    messageID: info.messageID,
    author: event.senderID,
  })
  },event.messageID);
   }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
const moment = require("moment-timezone");
var timeNow = moment.tz("Asia/Dhaka").format("HH:mm:ss")
async function streamURL(url, mime='jpg') {
  const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
  downloader = require('image-downloader'),
  fse = require('fs-extra');
  await downloader.image({
      url, dest
  });
  setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
  return fse.createReadStream(dest);
};

let threadInfo = await api.getThreadInfo(event.threadID);
let threadName = threadInfo.threadName;
let id = threadInfo.threadID;
let sex = threadInfo.approvalMode;
var pd = sex == false ? 'Turn off' : sex == true ? 'Turn on' : '\n';
var gio2 = moment.tz("Europe/Lodon").format("HH:mm:ss || D/MM/YYYY");
 var gio1 = moment.tz("America/Brasília").format("HH:mm:ss || D/MM/YYYY");
 var gio3 = moment.tz("Asia/Seoul").format("HH:mm:ss || D/MM/YYYY");
 var gio4 = moment.tz("Asia/Tokyo").format("HH:mm:ss || D/MM/YYYY");
 var gio5 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
 var gio6 = moment.tz("Asia/Kuala_Lumpur").format("HH:mm:ss || D/MM/YYYY");
 var gio7 = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");
var gio8 = moment.tz("Europe/Lisbon").format("HH:mm:ss || D/MM/YYYY");
var gio9 = moment.tz("Asia/Jordan").format("HH:mm:ss || D/MM/YYYY");
var gio10 = moment.tz("Asia/Lao").format("HH:mm:ss || D/MM/YYYY");
var gio11 = moment.tz("Asia/Thai_Lan").format("HH:mm:ss || D/MM/YYYY");
var gio12 = moment.tz("Asia/Brunei").format("HH:mm:ss || D/MM/YYYY");
let color = threadInfo.color;
let icon = threadInfo.emoji;
let threadMem = threadInfo.participantIDs.length;
if (event.userID != handleReaction.author) return;
if (event.reaction != "🌺") return; 
api.sendMessage({
    body: `🌐 •—»✨ 𝗦𝗘𝗩𝗘𝗥 𝗧𝗜𝗠𝗘 ✨«—• 🌐\n•┄┅════❁🌺❁════┅┄•\n🌐𝟭.𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗱𝗼𝗻: ${gio2}\n🌐𝟮.𝗧𝗶𝗺𝗲 𝗕𝗿𝗮𝘀𝗶𝗹𝗶𝗮: ${gio1} \n🌐𝟯.𝗧𝗶𝗺𝗲 𝗦𝗲𝗼𝘂𝗹: ${gio3}\n🌐𝟰.𝗧𝗶𝗺𝗲 𝗧𝗼𝗸𝘆𝗼: ${gio4}\n🌐𝟱.𝗧𝗶𝗺𝗲 𝗡𝗲𝘄𝗬𝗼𝗿𝗸: ${gio5}\n🌐𝟲.𝗧𝗶𝗺𝗲 𝗞𝘂𝗮𝗹𝗮 𝗟𝘂𝗺𝗽𝘂𝗿: ${gio6}\n🌐𝟳.𝗧𝗶𝗺𝗲 𝗣𝗮𝗿𝗶𝘀: ${gio7}\n🌐𝟴.𝗧𝗶𝗺𝗲 𝗟𝗶𝘀𝗯𝗼𝗻: ${gio8}\n🌐𝟵.𝗧𝗶𝗺𝗲 𝗝𝗼𝗿𝗱𝗮𝗻: ${gio9}\n🌐𝟭𝟬.𝗟𝗔𝗢𝗦 𝗧𝗜𝗠𝗘: ${gio10}\n🌐𝟭𝟭.𝗧𝗛𝗔𝗜𝗟𝗔𝗡𝗗 𝗧𝗜𝗠𝗘: ${gio11}\n🌐𝟭𝟮.𝗧𝗶𝗺𝗲 𝗕𝗿𝘂𝗻𝗲𝗶: ${gio12}\n•┄┅════❁🌺❁════┅┄•\n•—»✨𝐑𝐄𝐏𝐋𝐘 𝐁𝐘 𝐍𝐔𝐌𝐁𝐄𝐑 𝐓𝐎 𝐒𝐄𝐄 𝐓𝐇𝐄 𝐋𝐈𝐒𝐓 𝐎𝐅 𝐆𝐓𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍𝐒 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍𝐒\n•—»✨ 𝟭: 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍\n•—»✨ 𝟮: 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓`,
         attachment: await streamURL(threadInfo.imageSrc)
},event.threadID, (err, info) => {

          global.client.handleReply.push({
              type: "choosee",
              name: this.config.name,
              author: event.senderID,
              messageID: info.messageID
          })
      })
  }
module.exports.handleReply = async function ({
  args,
  event,
  Users,
  api,
  handleReply,
  Currencies,
  permssion,
  getText,
  __GLOBAL
}) {
const axios = require("axios");
const fs = require("fs-extra");
      api.sendMessage(`•—»✨ 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 𝐀 𝐌𝐎𝐌𝐄𝐍𝐓 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐈𝐒 𝐑𝐄𝐓𝐑𝐈𝐄𝐕𝐈𝐍𝐆 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍.`, event.threadID, (err, info) =>
setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
const request = require("request");
     const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
let data = (await Currencies.getData(event.senderID)).ghepTime;


  switch (handleReply.type) {
  case "choosee": {
      switch (event.body) {
        case "" :
        case "":
        case "1": {
       var threadInfo = await api.getThreadInfo(event.threadID);
  let qtv = threadInfo.adminIDs.length;
  var listad = '';
  var qtv2 = threadInfo.adminIDs;
  dem = 1;
  for (let i = 0; i < qtv2.length; i++) {
      const info = (await api.getUserInfo(qtv2[i].id));
      const name = info[qtv2[i].id].name;
      listad += '' + `${dem++}` + '. ' + name + '\n';
  }

  api.sendMessage(
      `•—»✨ 𝐋𝐈𝐒𝐓 ${qtv} 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐓𝐎𝐑𝐒:\n ${listad}`,event.threadID,event.messageID)
}break;
      case "2": {
        const { ADMINBOT } = global.config;
         listAdmin = ADMINBOT || config.ADMINBOT ||  [];
          var msg = [];
          for (const idAdmin of listAdmin) {
              if (parseInt(idAdmin)) {
                const tnt = (await Users.getData(idAdmin)).name
                  msg.push(`→  ${tnt}\n𝗟𝗶𝗻𝗸: fb.me/${idAdmin}`);              
              }
          }
         return api.sendMessage(`•—»✨ 𝐀𝐃𝐌𝐈𝐍 𝐋𝐈𝐒𝐓 ✨«—•\n${msg.join("\n")}\n`, event.threadID, event.messageID);
}break;
        default:
         const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("•—»✨ 𝐏𝐋𝐄𝐀𝐒𝐄 𝐄𝐍𝐓𝐄𝐑 𝟏 𝐍𝐔𝐌𝐁𝐄𝐑", event.threadID, event.messageID);
            if (choose > 2 || choose < 1) return api.sendMessage("•—»✨ 𝐒𝐄𝐋𝐄𝐂𝐓𝐈𝐎𝐍 𝐈𝐒 𝐍𝐎𝐓 𝐈𝐍 𝐓𝐇𝐄 𝐋𝐈𝐒𝐓", event.threadID, event.messageID); 
     }
  }
}
}