const request = require('request');

module.exports.config = {
  name: "world",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
  description: "See the coordinates that the spacecraft is in Lac",
  commandCategory: "Tool",
  usages: "iss",
  cooldowns: 5,
  dependencies: {
    "request": ""
  }
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  return request(`http://api.open-notify.org/iss-now.json`, (err, response, body) => {
    if (err) throw err;
    var jsonData = JSON.parse(body);
    api.sendMessage(`╭•┄┅════❁🌺❁════┅┄•╮\n\n আন্তর্জাতিক মহাকাশ স্টেশনের বর্তমান অবস্থান 🌌🌠🌃\n-অক্ষাংশ: ${jsonData.iss_position.latitude}\n- দ্রাঘিমাংশ: ${jsonData.iss_position.longitude}\n\n╰•┄┅════❁🌺❁════┅┄•╯`, event.threadID, event.messageID);
  });
}