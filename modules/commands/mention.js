 module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
    credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100029115600589") {
    var aid = ["100029115600589"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴀʏ sᴏᴍᴇᴛʜɪɴɢ ᴛᴏ ᴍʏ ʙᴏss, ɢᴏ ᴛᴏ ʜɪs ɪɴʙᴏx 😊 ᴅᴏɴ'ᴛ ғᴏᴏʟ ʜɪᴍ ᴡɪᴛʜ ᴍᴇɴᴛɪᴏɴs 😔", "ᴍʏ ʙᴏss ᴍᴀʏ ʙᴇ ʙᴜsʏ, ᴄᴀɴ ʏᴏᴜ ᴛᴇʟʟ ᴍᴇ", "ʙʀᴏᴛʜᴇʀ, ᴅᴏɴ'ᴛ ʀᴜɪɴ ᴛʜᴇ ɢʀᴏᴜᴘ ʙʏ ᴍᴇɴᴛɪᴏɴɪɴɢ ʜɪᴍ - ᴡʜɪᴄʜᴇᴠᴇʀ ɪs ᴛʜᴇ ʙɪɢɢᴇsᴛ ᴏғ ʜɪs ɪᴅ. ᴊᴜsᴛ sᴇᴇɪɴɢ ᴛʜᴇ ɴᴀᴍᴇ 🙆‍♂️ sᴄᴀʀᴇs ᴍᴇ 🥺🤦‍♂️", "ɪᴛ's ɴᴏ ᴜsᴇ ɴᴏᴛ ɢɪᴠɪɴɢ ᴛʜᴇ ʙᴏss ᴀ ᴍᴇɴᴛɪᴏɴ, ʜᴇ's ᴀ ʙɪᴛ ᴛᴏᴏ ʙᴜsʏ, ʏᴏᴜ ᴄᴀɴ ᴛᴇʟʟ ᴍᴇ ᴡʜᴀᴛ ᴛᴏ sᴀʏ"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }