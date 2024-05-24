module.exports.config = {
  name: "ban",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Islamick Chat",
  description: "",
  commandCategory: "ADMIN",
  usages: "",
  cooldowns: 5
};
const { readFileSync, writeFileSync, unlinkSync, createReadStream, existsSync } = require("fs-extra");
const moment = require("moment-timezone");
const timeNow = moment.tz("Asia/Dhaka").format("DD/MM/YYYY");
const { join } = require('path');
const pathData = join(__dirname, "cache", "settimeban.json");
const path = __dirname + '/cache/settimeban.json';
module.exports.onLoad = function({ }) {
  if (!existsSync(path)) return writeFileSync(path, "[]", "utf-8");
}
module.exports.handleEvent = async ({ api, event, args, Threads }) => {
  var { senderID, threadID, messageID } = event;
  var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
  var listthreadID = dataJson.filter(item => item.date == timeNow);
  var list = dataJson.filter(item => item.date !== timeNow);
  for(let i = 0; i < listthreadID.length; i++){
    setTimeout(async () => {
        let data = (await Threads.getData(listthreadID[i].threadID)).data || {};
        data.banned = true;
        data.reason = "Nap VIP DE DUOC GO BAN ?"|| null;
        data.dateAdded = timeNow;
        await Threads.setData(listthreadID[i].threadID, { data });
        global.data.threadBanned.set(listthreadID[i].threadID, { reason: data.reason, dateAdded: data.dateAdded });

    },3000)
  }
  writeFileSync(pathData, JSON.stringify(list, null, 4), "utf-8");
};

module.exports. run = async ({ api, event, args }) => {
  var { senderID, threadID, messageID } = event;
  var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
  var thread = args[1] || threadID;
  if(!args[0].includes('/')) return api.sendMessage("wrong date format\ncorrect format DD/MM/YYYY", threadID, messageID)
   var userData = dataJson.find(item => item.threadID == threadID) || { date: args[0], threadID: threadID}
  if(!userData) return api.sendMessage('𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐚𝐥𝐫𝐞𝐚d𝐲 𝐚dd𝐞d 𝐭𝐡𝐢𝐬 𝐠𝐫𝐨𝐮𝐩 𝐭𝐨 𝐭𝐡𝐞 𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝐛𝐚𝐧 𝐰𝐚𝐢𝐭𝐢𝐧𝐠 𝐥𝐢𝐬𝐭', threadID);
  console.log(userData)
  dataJson.push(userData);
  writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
  api.sendMessage('𝐀dd𝐞d 𝐠𝐫𝐨𝐮𝐩 𝐭𝐨 𝐛𝐚𝐧 𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁  𝐰𝐚𝐢𝐭𝐢𝐧𝐠 𝐥𝐢𝐬𝐭', threadID);
};