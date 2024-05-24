module.exports.config = {
  name: "wp",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
  description: "create wp link",
  commandCategory: "wo",
  usages: "[whats up number]",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
  if (!say) api.sendMessage("Please enter a wp number", event.threadID, event.messageID)
  else api.sendMessage(`wa.me/+88${say}`, event.threadID, event.messageID);
}
