module.exports.config = {
  name: "say",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
  description: "bot say to text",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
let juswa = args.join(" ");
return api.sendMessage(`${juswa}`, event.threadID, event.messageID);
}