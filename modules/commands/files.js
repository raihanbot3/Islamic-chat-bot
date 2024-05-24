module.exports.config = {
  name: "file",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
  description: "Delete the file or folder in the commands folder",
  commandCategory: "Admin",
  usages: "\ncommands start <text>\ncommands ext <text>\ncommands <text>\ncommands [leave blank]\ncommands help\nNOTE: <text> is the character you want to enter",
  cooldowns: 5
};

module.exports.handleReply = ({ api, event, args, handleReply }) => {
  if(event.senderID != handleReply.author) return; 
  const fs = require("fs-extra");
var arrnum = event.body.split(" ");
var msg = "";
var nums = arrnum.map(n => parseInt(n));

for(let num of nums) {
  var target = handleReply.files[num-1];
  var fileOrdir = fs.statSync(__dirname+'/'+target);
      if(fileOrdir.isDirectory() == true) {
        var typef = "[Folder🗂️]";
        fs.rmdirSync(__dirname+'/'+target, {recursive: true});
      }
      else if(fileOrdir.isFile() == true) {
        var typef = "[File📄]";
        fs.unlinkSync(__dirname+"/"+target);
      }
      msg += typef+' '+handleReply.files[num-1]+"\n";
}
api.sendMessage("╭•┄┅════❁🌺❁════┅┄•╮\n\n কমান্ড ফোল্ডারে নিম্নলিখিত ফাইল মুছে ফেলা হয়েছে-!!😌\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n"+msg, event.threadID, event.messageID);
}


module.exports.run = async function({ api, event, args, Threads }) {

const fs = require("fs-extra");
var files = fs.readdirSync(__dirname+"/") || [];
var msg = "", i = 1;

//

if(args[0] == 'help') {
  var msg = `
How to use the command:
•Key: start <text>
•Effect: Filter out files to be deleted with an optional starting character
•Example: commands rank
•Key: ext <text>
•Effect: Filter out files to be deleted with optional extension
•Effect: filter out files in the name with custom text
•Example: commands a
•Key: leave blank
•Effect: filter out all files in the cache
•Example: commands
•Key: help
•Effect: see how to use the command
•Example: commands help`;

  return api.sendMessage(msg, event.threadID, event.messageID);
}
else if(args[0] == "start" && args[1]) {
  var word = args.slice(1).join(" ");
  var files = files.filter(file => file.startsWith(word));

  if(files.length == 0) return api.sendMessage(`╭•┄┅════❁🌺❁════┅┄•╮\n\n ক্যাশে কোন ফাইল নেই যা দিয়ে শুরু হয়-!!🥸\n\n╰•┄┅════❁🌺❁════┅┄•╯${word}`, event.threadID ,event. messageID);
  var key = `╭•┄┅════❁🌺❁════┅┄•╮\n\nআছে ${files.length} ফাইলটিতে একটি অক্ষর রয়েছে যা দিয়ে শুরু হয় :${word}\n\n╰•┄┅════❁🌺❁════┅┄•╯`;
}

//file extension is..... 
else if(args[0] == "ext" && args[1]) {
  var ext = args[1];
  var files = files.filter(file => file.endsWith(ext));

  if(files.length == 0) return api.sendMessage(`╭•┄┅════❁🌺❁════┅┄•╮\n\nকমান্ডে কোন ফাইল নেই যা দিয়ে শেষ হয়-!!🫤: ${ext}\n\n╰•┄┅════❁🌺❁════┅┄•╯`, event.threadID ,event. messageID);
  var key = `╭•┄┅════❁🌺❁════┅┄•╮\n\n আছে ${files.length} ফাইলের এক্সটেনশন আছে: ${ext}\n\n╰•┄┅════❁🌺❁════┅┄•╯`;
}
//all file
else if (!args[0]) {
if(files.length == 0) return api.sendMessage("╭•┄┅════❁🌺❁════┅┄•╮\n\nআপনার কমান্ডে কোন ফাইল বা ফোল্ডার নেই\n\n╰•┄┅════❁🌺❁════┅┄•╯", event.threadID ,event. messageID);
var key = "কমান্ড ফোল্ডারে সমস্ত ফাইল\n\n╰•┄┅════❁🌺❁════┅┄•╯";
}
//There are characters in the name.....
else {
  var word = args.slice(0).join(" ");
  var files = files.filter(file => file.includes(word));
  if(files.length == 0) return api.sendMessage(`╭•┄┅════❁🌺❁════┅┄•╮\n\n অক্ষর সহ নামের কোন ফাইল নেই : ${word}\n\n╰•┄┅════❁🌺❁════┅┄•╯`, event.threadID ,event. messageID);
  var key = `╭•┄┅════❁🌺❁════┅┄•╮\n\n আছে ${files.length} নামের ফাইলটিতে অক্ষর রয়েছে : ${word}\n\n╰•┄┅════❁🌺❁════┅┄•╯`;
}

  files.forEach(file => {
      var fileOrdir = fs.statSync(__dirname+'/'+file);
      if(fileOrdir.isDirectory() == true) var typef = "[Folder🗂️]";
      if(fileOrdir.isFile() == true) var typef = "[File📄]";
      msg += (i++)+'. '+typef+' '+file+'\n';
  });

   api.sendMessage(`╭•┄┅════❁🌺❁════┅┄•╮\n\nসংশ্লিষ্ট ফাইলটি মুছে ফেলার জন্য নম্বর দ্বারা বার্তার উত্তর দিন, স্থান দ্বারা পৃথক করে একাধিক নম্বরের প্রতিনিধিত্ব করতে পারে।.\n${key}\n\n`+msg, event.threadID, (e, info) => global.client.handleReply.push({
  name: this.config.name,
  messageID: info.messageID,
  author: event.senderID,
  files
}))

}