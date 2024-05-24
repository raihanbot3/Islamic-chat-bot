module.exports.config = {
  name: "web",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick chat",
  description: "Screenshot for wab page (NOT ALLOW NSFW PAGE)",
  commandCategory: "wab",
  usages: "[url site]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": "",
        "path": "",
        "url": ""
    }
};

module.exports.onLoad = async () => {
    const { existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    const path = resolve(__dirname, "cache", "pornlist.txt");

    if (!existsSync(path)) return await global.utils.downloadFile("https://raw.githubusercontent.com/blocklistproject/Lists/master/porn.txt", path);
    else return;
}

module.exports.run = async ({ event, api, args, }) => {
    const { readFileSync, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const url = global.nodemodule["url"];

    if (!global.moduleData.pornList) global.moduleData.pornList = readFileSync(__dirname + "/cache/pornlist.txt", "utf-8").split('\n').filter(site => site && !site.startsWith('#')).map(site => site.replace(/^(0.0.0.0 )/, ''));
    const urlParsed = url.parse(args[0]);

    if (global.moduleData.pornList.some(pornURL => urlParsed.host == pornURL)) return api.sendMessage("Trang web bạn nhập không an toàn!!(NSFW PAGE)", event.threadID, event.messageID);

    try {
        const path = __dirname + `/cache/${event.threadID}-${event.senderID}s.png`;
        await global.utils.downloadFile(`https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/${args[0]}`, path);
        api.sendMessage({ attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path));
    }
    catch {
        return api.sendMessage("𝐓𝐇𝐈𝐒 𝐔𝐑𝐋 𝐖𝐀𝐒 𝐍𝐎𝐓 𝐅𝐎𝐔𝐍𝐃 𝐅𝐎𝐑𝐌𝐀𝐓 𝐈𝐒 𝐍𝐎𝐓 𝐂𝐎𝐑𝐑𝐄𝐂𝐓-!!😐", event.threadID, event.messageID);
    }
}