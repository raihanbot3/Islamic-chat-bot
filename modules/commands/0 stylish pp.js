module.exports.config = {
  name: "stylish pp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "Random stylish pp",
  commandCategory: "Random-IMG",
  usages: "stylish",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/vcX84lb.jpg",
"https://i.imgur.com/ET3aNPE.jpg",
"https://i.imgur.com/86JRtEA.jpg",
"https://i.imgur.com/DzuIdi6.jpg",
"https://i.imgur.com/A5MHyFp.jpg",
"https://i.imgur.com/SxqX36n.jpg",
"https://i.imgur.com/Z2G1Kdy.jpg",
"https://i.imgur.com/tLeAsDH.jpg",
"https://i.imgur.com/2UUwwl4.jpg",
"https://i.imgur.com/t8kO6mj.jpg",
"https://i.imgur.com/GTxqNka.jpg",
"https://i.imgur.com/V4GdjuY.jpg",
"https://i.imgur.com/zFPB2Gp.jpg",
"https://i.imgur.com/7XD6SUL.jpg",
"https://i.imgur.com/6ZtguC8.jpg",
"https://i.imgur.com/oT7dQ5v.jpg",
"https://i.imgur.com/tu5uB8x.jpg",
"https://i.imgur.com/hoK21DO.jpg",
"https://i.imgur.com/WP4WiDZ.jpg",
"https://i.imgur.com/BCFS4wL.jpg",
"https://i.imgur.com/tU8QVXm.jpg",
"https://i.imgur.com/3T0kIiT.jpg",
"https://i.imgur.com/MlfiRdX.jpg",
"https://i.imgur.com/wzcB3nf.jpg",
"https://i.imgur.com/AaWapNV.jpg",
"https://i.imgur.com/BQuLino.jpg",
"https://i.imgur.com/BKemmZu.jpg",
"https://i.imgur.com/ICTGkvi.jpg",
"https://i.imgur.com/A9s4phi.jpg",
"https://i.imgur.com/jjDkDrF.jpg",
"https://i.imgur.com/3q9m81B.jpg",
"https://i.imgur.com/nf5tBl3.jpg",
"https://i.imgur.com/tvZ3poW.jpg",
"https://i.imgur.com/tvZ3poW.jpg",
"https://i.imgur.com/wFXkk1N.jpg",
'https://i.imgur.com/5mLof37.jpg",
"https://i.imgur.com/eu6sAQH.jpg",
"https://i.imgur.com/JRt18u3.jpg",
"https://i.imgur.com/cCxqkqt.jpg",
"https://i.imgur.com/fGjFV09.jpg",
"https://i.imgur.com/Be8jD4K.jpg",
'https://i.imgur.com/Nk6Nkfn.jpg",
"https://i.imgur.com/3B7iE66.jpg",
"https://i.imgur.com/Tmb73MP.jpg",
     ];
     var callback = () => api.sendMessage({body:`𝐒𝐓𝐘𝐋𝐈𝐒𝐇 𝐅𝐁 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐈𝐌𝐆`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };