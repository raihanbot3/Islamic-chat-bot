module.exports.config = {
  name: "st12",
  version: "3.0.8",
  hasPermssion: 0,
  credits: "Islamick Chat",  //Please Don't change the credit
  description: "randomimg",
  commandCategory: "img",
  usages: "random",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = [ "𝐃𝐎𝐋 𝐋𝐎𝐕𝐄𝐑 𝐆𝐈𝐑𝐋 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐆",];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.postimg.cc/N0zD78y6/received-1005134393961451.jpg",
"https://i.postimg.cc/dt2WPTXF/received-1054785592568057.jpg",
"https://i.postimg.cc/T2ZSXx3V/received-1154084175994778.jpg",
"https://i.postimg.cc/Qtdmc4xx/received-1335270364075794.jpg",
'https://i.postimg.cc/xCXsWprp/received-136662872816941.jpg",
"https://i.postimg.cc/6ph1RGLc/received-1367222300541534.jpg",
"https://i.postimg.cc/y8nvWCsr/received-1371618277041985.jpg",
'https://i.postimg.cc/252FjQFp/received-1375928219804744.jpg",
"https://i.postimg.cc/NLqRCpYX/received-1476709226439174.jpg",
'https://i.postimg.cc/6q7hm8vk/received-1949193192128006.jpg",
"https://i.postimg.cc/tCx5dVyP/received-2158946187644305.jpg",
'https://i.postimg.cc/4xR1WNN0/received-252471267630412.jpg",
'https://i.postimg.cc/L4ZCDW3n/received-311252044685349.jpg",
"https://i.postimg.cc/rybjt96M/received-312811217854341.jpg",
"https://i.postimg.cc/RVKYSYWj/received-3704377409844907.jpg",
"https://i.postimg.cc/Kjd5Sm7R/received-604424485210265.jpg",
"https://i.postimg.cc/5txSM7zq/received-6394811407234092.jpg",
"https://i.postimg.cc/QM44YGzW/received-648065177050973.jpg",
"https://i.postimg.cc/vmBXV2m8/received-699599975335440.jpg",
"https://i.postimg.cc/sfB88xsf/received-731566498737833.jpg",
"https://i.postimg.cc/28RHKx0T/received-812372417285575.jpg",
"https://i.postimg.cc/xC8GXXtX/received-834167671654478.jpg",
"https://i.postimg.cc/Y9TXkNMr/received-840963354323228.jpg",
"https://i.postimg.cc/GtYXpBmk/received-845444297212886.jpg",
"https://i.postimg.cc/7Z1nd85Z/received-856398512012313.jpg",
"https://i.postimg.cc/kgCpBy8D/received-856519589231686.jpg",
'https://i.postimg.cc/JnFNZR2P/received-949705512800359.jpg",
"https://i.postimg.cc/D0bqctVF/received-960992034970269.jpg",

];
   var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };