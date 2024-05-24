 module.exports.config = {
  name: "fork",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "Islamick Chat", //don't change the credits please
  description: "public fork link",
  commandCategory: "public",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/zB4D8kfP/images-2023-11-30-T170801-650.jpg", 

            "https://i.postimg.cc/k51XhCPC/images-2023-11-30-T171013-637.jpg", 

            "https://i.postimg.cc/hjX4kYKd/images-2023-11-30-T170829-979.jpg",

"",

            ""];

var callback = () => api.sendMessage({body:`╭•┄┅════❁🌺❁════┅┄•╮\n   আসসালামু আলাইকুম-!!🖤💫\n╰•┄┅════❁🌺❁════┅┄•╯\n\nআপনি আমাদের ইসলামিক মেসেঞ্জার রোবোট টি ব্যবহার করে চাইলে আপনাকে kiwi browser  আপ্লিকেশন টি ইন্সটল করে নিতে হবে\nএটি প্লে স্টোর এ পেয়ে যাবেন-!!🌐\n\nতার পর একটি রিপ্লাই একাউন্ট খুলে নিতে হবে-!!🤎\n\n এবং আপনাকে C3C zip file টি ডাউনলোড করে নিতে হবে এটি আমাদের web site এ পেয়ে জাবেন।\n web site link  and fork লিনক নিচে দেওয়া থাকবে-!!✨💖\nআরও নতুন নতুন ফাইল updated  গুলো আমাদের গ্রুপ এ দেওয়া হবে-!!📂\n\nনতুন নতুন update file পেতে আমাদের গ্রুপ এর সাথেই থাকবেন-!!✨🧡\n\n\n       𝐅𝐎𝐑𝐊 𝐋𝐈𝐍𝐊.  https://replit.com/@MdRajib3/Islamick-Chat-bot-vip\n\n      🌐𝐖𝐄𝐁 𝐒𝐈𝐓𝐄 𝐋𝐈𝐍𝐊.  https://linktr.ee/muslimhakcerbd\n\n          𝐆𝐫𝐨𝐮𝐩 𝐋𝐢𝐧𝐤 https://m.me/j/AbZEOcdMGQYprT74/`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };