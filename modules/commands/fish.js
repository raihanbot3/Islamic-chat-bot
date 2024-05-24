module.exports.config = {
	name: "adda",
	version: "1.0.0",
	hasPermssion: 0,
	creators : "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
	description: "group adda",
	commandCategory: "Economy",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1000000
    }
};

module.exports.languages = {
    
        
    "en": {
        "cooldown": "╭•┄┅════❁🌺❁════┅┄•╮\n\n আপনি আজ গ্রুপ এ আড্ডা সব থেকে বেশি দিয়েছেন-!!🤗\n আপনি এখন হয়তো ক্লান্ত হয়ে পরেছেন 🥲\n ক্লান্ত এড়াতে অনুগ্রহ করে : %1 মিনিট (s) %2 সেকেন্ড (s).রেস্ট নেন \n\n╰•┄┅════❁🌺❁════┅┄•╯",
        "rewarded": "╭•┄┅════❁🌺❁════┅┄•╮\n\n আজ এই গ্রুপ এ আপনার থেকে কেও বেশি আড্ডা দিতে পারলো না তাই গ্রুপ এর পক্ষ থেকে আপনার উপহার : %2 ভালোবাসা ❤️😍😘\n\n╰•┄┅════❁🌺❁════┅┄•╯",
        "job1": "Fishing",
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 20000),
            seconds = ((time % 20000) / 500).toFixed(0);
        
		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {
        const job = [
            getText("Fishing"),
        ];
        const amount = Math.floor(Math.random() * 1000000);
        return api.sendMessage(getText("rewarded", job[Math.floor(Math.random() * job.length)], amount), threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
}