module.exports.config = {
  name: "randommix",
  version: "11.9.7",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "random love story video",
  commandCategory: "video",
  usages: "random",
  cooldowns: 30,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var red = ["https://rajib-api-1.islam500.repl.co/vdvip",
"https://rajib-api-1.islam500.repl.co/vdremix",
"https://rajib-api-1.islam500.repl.co/vdlq",
"https://rajib-api-1.islam500.repl.co/vdgai",
"https://rajib-api-1.islam500.repl.co/vdff",
"https://rajib-api-1.islam500.repl.co/vddoremon",
"https://rajib-api-1.islam500.repl.co/vdcosplay"]
  var redroom = red[Math.floor(Math.random() * red.length)]
  axios.get(redroom).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `𝐒𝐏𝐀𝐘𝐒𝐇𝐄𝐀𝐋 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐈𝐗 𝐕𝐈𝐃𝐄𝐎...🎬\n\n｢𝐈𝐒𝐋𝐀𝐌𝐈𝐂𝐊 𝐂𝐇𝐀𝐓｣`,
            attachment: fs.createReadStream(__dirname + `/data/rajib.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/data/rajib.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/data/rajib.${ext}`)).on("close", callback);
      })
}