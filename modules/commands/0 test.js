   module.exports.config = {
  name: "animals",
  version: "1.2.8",
  hasPermssion: 0,
  credits: "Islamick Chat", //Don't chinge The credit
  description: "See information about the 12 zodiac animals",
  commandCategory: "Utilities",
  usages: "animals",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  } 
}

module.exports.onLoad = () => {
  let { mkdirSync, existsSync, createWriteStream } = require("fs-extra");
  let request = require("request");
  let dirMaterial = __dirname + `/noprefix/12congiap/`; 
  if (!existsSync(dirMaterial + "noprefix" + "12congiap")) mkdirSync(dirMaterial, { recursive: true });

  if (!existsSync(dirMaterial + "sửu.jpg")) request("https://i.imgur.com/11RFXQx.jpg").pipe(createWriteStream(dirMaterial + "sửu.jpg"))

  if (!existsSync(dirMaterial + "tý.jpg")) request("https://i.imgur.com/5HxGOz7.jpg").pipe(createWriteStream(dirMaterial + "tý.jpg"))

  if (!existsSync(dirMaterial + "dần.jpg")) request("https://i.imgur.com/gSzX7nL.jpg").pipe(createWriteStream(dirMaterial + "dần.jpg"))

  if (!existsSync(dirMaterial + "mão.jpg")) request("https://i.imgur.com/SVcdKJp.jpg").pipe(createWriteStream(dirMaterial + "mão.jpg"))

  if (!existsSync(dirMaterial + "thìn.jpg")) request("https://i.imgur.com/ANdQTeq.jpg").pipe(createWriteStream(dirMaterial + "thìn.jpg"))

  if (!existsSync(dirMaterial + "tỵ.jpg")) request("https://i.imgur.com/lnxS2Xr.jpg").pipe(createWriteStream(dirMaterial + "tỵ.jpg"))

  if (!existsSync(dirMaterial + "ngọ.jpg")) request("https://i.imgur.com/FnKVUKI.jpg").pipe(createWriteStream(dirMaterial + "ngọ.jpg"))

  if (!existsSync(dirMaterial + "mùi.jpg")) request("https://i.imgur.com/fOSI3wz.jpg").pipe(createWriteStream(dirMaterial + "mùi.jpg"))

  if (!existsSync(dirMaterial + "thân.jpg")) request("https://i.imgur.com/hPTcpV5.jpg").pipe(createWriteStream(dirMaterial + "thân.jpg"))

  if (!existsSync(dirMaterial + "dậu.jpg")) request("https://i.imgur.com/chW3Tc1.jpg").pipe(createWriteStream(dirMaterial + "dậu.jpg"))

  if (!existsSync(dirMaterial + "tuất.jpg")) request("https://i.imgur.com/7i7GU1t.jpg").pipe(createWriteStream(dirMaterial + "tuất.jpg"))

  if (!existsSync(dirMaterial + "hợi.jpg")) request("https://i.imgur.com/hJ5nfUa.jpg").pipe(createWriteStream(dirMaterial + "hợi.jpg"))

}

module.exports.handleReply = async ({ api, event, handleReply }) => {
  let { createReadStream } = require("fs-extra");
  let { threadID, messageID, senderID, body } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(body) {

          case "1":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "1. Rat (Rat 🐁 )\n\n(23-1 o'clock): When the rat is very active.\n\nThe rat is the zodiac animal that represents a smooth and good start. People born in the year of the Rat often have the characteristics of being very attractive to the opposite sex, being charming and clever at work. People born in this age always carry within themselves a positive and creative energy. When encountering difficulties, always calmly solve the difficulties.\n\nAccording to feng shui, Rats are considered to bring prosperity to the homeowner. Among the 12 zodiac animal statues, when displaying the Rat mascot statue, the homeowner can receive help in solving situations, bringing prosperity to the family", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/tý.jpg`)
      }, threadID, messageID);
      break;

    case "2":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "\n2. Ox ( Tru 🐃 )\n\n(1-3 hours): When the buffalo is chewing its cud, preparing to plow.\n\nThe buffalo symbolizes diligence and patience. This year has seen steady but slow progress and a staying power; People born in the year of the Ox often have the right personality to become a scientist.\n\nThe buffalo symbolizes spring and agriculture because it is associated with the plow and likes to wallow in mud. People of this age are often calm and very determined but very stubborn", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/sửu.jpg`)
      },threadID, messageID);
      break;

    case "3":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "3. Tiger (Tiger 🐅 )\n\n(3-5 hours): When the tiger is most aggressive.\n\nPeople born in the year of the tiger are often easily angry and lacking in stance, but they can be very soft and flexible. Change your personality to adapt to the situation. The tiger is the king of the jungle, often lives at night and evokes images of darkness and storms. Tiger Hour starts from 3:00 a.m. to 5:00 a.m. when tigers return to their dens after prowling at night.", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/dần.jpg`)
      }, threadID, messageID); 
      break;

    case "4":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "4. Cat (Cat 🐈 )\n\n(5-7 o'clock): Vietnam calls it cat, but China calls it rabbit, when the moon (jade rabbit) is still shining.\n\nCat symbolizes people Soft-spoken, talented, ambitious and will succeed in his education. They are very conflicted with people born in the year of the Rat. People born in the year of the Cat have a flexible spirit, patience, and know how to wait for the right moment before taking action", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/mão.jpg`)
      }, threadID, messageID); 
      break;

    case "5":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "5. Dragon (Dragon 🐉 )\n\n(7-9 hours): When the dragon flock gathers in the rain (Quan Long dance).\n\nThe dragon in Eastern legend is the Yang nature of the universe, symbolizing statue of royal authority. Accordingly, dragons are present everywhere, underwater, on the ground and in the air. The dragon is a symbol of water and a favorable sign for agriculture. People born in the year of the Dragon are very honest, energetic but very hot-tempered and stubborn. They are symbols of power, wealth, prosperity and royalty.", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/thìn.jpg`)
      }, threadID, messageID); 
      break;

    case "6":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "6. Snake (Snake 🐍 )\n\n(9-11 o'clock): When snakes do not harm people.\n\nPeople born in the year of the snake speak little but are very wise. They are suitable for wet areas. The snake symbolizes the eternal evolution of age and succession, decay and the succession of generations of humanity. People born in the year of the snake are very calm, gentle, thoughtful and sympathetic, but sometimes they also get angry. They are very determined and persistent", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/tỵ.jpg`)
      }, threadID, messageID); 
      break;

    case "7":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: " 7. Horse (Horse 🦓 )\n\n(11-13 o'clock): Horses are highly positive.\n\nPeople born in the year of the Horse often speak gently, comfortably and generously. Therefore, they are easily liked by many people but they rarely listen to advice. People of this age often have a very hot temper. The horse's running speed reminds people of the sun shining on the earth every day. In mythology, the sun is associated with raging horses. This age is often said to be pure, noble and wise. People of this age are often respected because they are intelligent, strong and full of love.", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/ngọ.jpg`)
      }, threadID, messageID); 
      break;

    case "8":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "8. Mui (Goat 🐐 )\n\n(13-15 hours): When goats eat grass, it does not affect the growth of plants.\n\nPeople born in the year of the Goat are usually very calm but shy, very humble but no stance. They speak very clumsily, so they cannot be good salespeople, but they are very sympathetic to people in need and often help people. They often have an advantage because of their natural kindness and shyness", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/mùi.jpg`)
      }, threadID, messageID); 
      break;

    case "9":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "9. Monkey (Monkey 🐒 )\n\n(15-17 o'clock): When monkeys like to howl. People born in the year of the Monkey are often talented people with erratic personalities. They are very talented and skillful in money transactions. People of this age are often very cheerful, skillful, curious and creative, but they talk too much so they are easily looked down upon and despised by others. Their shortcomings lie in their erratic and inconsistent temperament", attachment: createReadStream(__dirname + `/noprefix/12congiap/thân.jpg`)
      }, threadID, messageID); 
      break;

    case "10":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "10. Rooster (Chicken 🐓)\n\n(17-19 hours): When the chickens start to roost.\n\nPeople born in the year of the Rooster have many excellent characteristics, such as being honest, bright, and loving to communicate. forward and ambitious. Most of them are born pretty or handsome and like to dress up. In daily life, they rarely rely on others. However, they can quickly become enthusiastic about something, but quickly become impatient. Therefore, they need to have enough faith and patience to be steadfast in one thing.\n\nThe Year of the Rooster symbolizes a period of diligent labor because the rooster must be busy from morning to night. Its creapi.is a sign of extreme intelligence and scholarly wisdom. People born in the year of the Rooster are considered deep thinkers. At the same time, Chicken is considered protection against fire. People born in the year of the Rooster often make a living through small businesses, working diligently like a chicken digging in the ground to find worms", attachment: createReadStream(__dirname + `/noprefix/12congiap/dậu.jpg`)
      }, threadID, messageID); 
            break;

      case "11":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "11. Dog (Dog 🐕 )\n\n(19-21 o'clock): When the dog must be alert to look after the house.\n\nThe Year of the Dog indicates a prosperous future. Around the world, dogs are used to guard homes against intruders. Pairs of fighting dogs are often placed on both sides of the village gate for protection. The Year of the Dog is believed to be a very safe year", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/tuất.jpg`)
      }, threadID, messageID); 
      break;

      case "12":
                api.unsendMessage(handleReply.messageID);
      api.sandmessage({
        body:"12. Pig ( Pig 🐖 )\n\n(21-23 o'clock): When pigs sleep the deepest.\n\nPig symbolizes wealth because wild boars often make burrows in forests. People born in the year of the Pig are very generous, kind and brave but often very stubborn, hot-tempered but diligent and willing to listen", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/hợi.jpg`)
      }, threadID, messageID); 
            break;

          default:
        const choose = parseInt(body);
              if (isNaN(body)) return api.sendMessage("•—»✨ Pleaser enter 1 Number ", threadID, messageID);
              if (choose > 12 || choose < 1) return api.sendMessage("•—»✨ Selections  is not in the list", threadID, messageID); 

      }
    }
  }
}

module.exports.run = async ({ api, event, handleReply }) => {
  let fs = require("fs-extra");
  let { threadID, senderID } = event;
  return api.sendMessage({ body: "= 12 zodiac animals in folklore =\n\n𝟏. 𝐓𝐲́ 🐁\n𝟐. 𝐒𝐮̛̉𝐮 🐃\n𝟑. 𝐃𝐚̂̀𝐧 🐅\n𝟒. 𝐌𝐚̃𝐨 🐈\n𝟓. 𝐓𝐡𝐢̀𝐧 🐉\n𝟔. 𝐓𝐲̣ 🐍\n𝟕. 𝐍𝐠𝐨̣ 🦓\n𝟖. 𝐌𝐮̀𝐢 🐐\n𝟗Reply the message by number if you want to see more about each zodiac animal 💞"
            }, threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        })  
    })
  }
