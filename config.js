//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklPNS9KdXVVZjZUVVlGOVZ5azlrOENzTEtzYW1kb0VOc21mVlZTOGltST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEk4VXByUXJUelVjVFpEb3pJa1ZlTXlYVFRFZVFpbmlzd2lEM0szSUpVRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Qzk0eGZoeGFFN2phZExpa0ppOG1mSmsyelRGREVJVzZ5bmdhaDVMREd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtMDVGTEN3c2hIVlRMeXF2Tm05M2U2M2ZYTTArWXdjc25KQ1Y5OUNzMFQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMRDFtajF5cUlDTkgzMHdsQVJUdm5iRmsxaURhMXRzQysxYXJtUUtqWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitTZk0rSVM1dTQ4Q3ZnNmdaTndNN2VKS2xoM3ZOQ0FRUVJFU3ozS2NnbVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUp3L0pTUnc4UzRXNWtwdm52MFg5OTQrbjZwYUlTRkl0K0xCZGlINGQzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWo2cUkwYlA3RzJhdTRpa1ZRRkhlMEV4Q3J6TzFTQmRLUWI3QmIwd1QwMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI3Qm1qUGdVcG5XdXg3TnRiZ0dlZ2d3MGVLc01SZWF0bzFQUzJrMGhjb0RSckduVVJVUm5ucmN2V3owbkVldVlXcVcvUy9EMlZIS3RxZEtsOVpFc0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiIwRmJIekcxaTVESXk2aEwxVmU1UFR6dElFTS9YbzRZMzlJaitaSzR3S0gwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiMlpBQTVpTFNzVzhDd0tfRFJiNkd3IiwicGhvbmVJZCI6IjYyZGZhNDAzLTgwNzgtNDNhMC04Mjk3LTVmZmQ0OTBhYmZhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4cmp5VEhtR3ZEaVdBeldvYjk0amdnc2FZNzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzVpSzI4RTAvT2s5eXFUendjQWlYcnlhTlFZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo1UEwxVkUzIiwibWUiOnsiaWQiOiI5MjMyMzcwNDU5MTk6NDNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXJzbGFuTUQg4oiaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeWF6TEFGRU0zdnJya0dHQ3dnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxdVpaQzd3a1JzcmRnckQra0k3Tm84ZFlVUlJqWnNkbHgxaHBsZlRsbkJzPSIsImFjY291bnRTaWduYXR1cmUiOiJ4dE9YdmpBeHZlazhOamRRY3l1K2pFMHhTcmtGUS9lRWNHUkl0OTQ0VnVRNi9PTGhKSExHWFRnbGRWUXF5UU5rbkNHSDRqckZsTzF1ZkZqa1BqcjdBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSWJMQ1VmdkVXYkw2aTJlaURaUW05ZDkxL2IvNHpIUElJT0tKaTVSaWdFUVIvci9FMWxpUlBNaklUWW1BWVFrcWlrMHpGaUpCdk1OclRZcXd1VEZTQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMzcwNDU5MTk6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXJtV1F1OEpFYkszWUt3L3BDT3phUEhXRkVVWTJiSFpjZFlhWlgwNVp3YiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDkxODM2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFES1EifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
