module.exports.config = {
  name: "namaz",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Rahad with frands Islamick Chat", //*don't change the my code
  description: "namaz time",
  commandCategory: "Islamic", 
  usages: "/namaz[Dhaka]", 
  cooldowns: 0,
  dependencies: [] 
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const prompt = args.join(" ");

  if (!prompt) return api.sendMessage("[ ! ] Input Your address", event.threadID, event.messageID);


 const RAHAD = `http://api.aladhan.com/v1/timingsByAddress?address=${encodeURIComponent(prompt)}`;

  try {
    const response = await axios.get(RAHAD);
    const timings = response.data.data.timings;


    const RahadApiUrl = "https://status-api-mdrahad1234561.replit.app/status ";
    const videoResponse = await axios.get(RahadApiUrl);
    const videoUrl = videoResponse.data.url.url;

    const videoBuffer = await axios.get(videoUrl, { responseType: 'arraybuffer' });

    fs.writeFileSync(__dirname + "/cache/video.mp4", Buffer.from(videoBuffer.data, "utf-8"));
    const videoReadStream = fs.createReadStream(__dirname + "/cache/video.mp4");

    const msg = `•┄┅════❁🌺❁════┅┄•\nআসসালামু আলাইকুম-!!🖤💫\n\nনামাযের-সময়:${prompt}\n\n•┄┅════❁🌺❁════┅┄•\n\n•—»✨ ফজর: ${timings.Fajr}\n\n•—»✨ যহর: ${timings.Dhuhr}\n\n•—»✨ আছর: ${timings.Asr}\n\n•—»✨ সূর্যাস্ত: ${timings.Sunset}\n\n•—»✨ মাগরিব: ${timings.Maghrib}\n\n•—»✨ ইশা: ${timings.Isha}\n\n•┄┅════❁🌺❁════┅┄•\n\n•—»✨ ইমসাক: ${timings.Imsak}\n\n•—»✨ মধ্যরাত: ${timings.Midnight}\n\n•┄┅════❁🌺❁════┅┄•`;

    return api.sendMessage(
      {
        body: msg,
        attachment: videoReadStream,
      },
      event.threadID,
      event.messageID
    );
  } catch (error) {

    console.error("API request error:", error);
    return api.sendMessage("[ ! ] An error occurred while fetching data.", event.threadID, event.messageID);
  }
};