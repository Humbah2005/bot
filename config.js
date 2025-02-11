const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "humbah",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_07_02_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInFXTVlRd0NkQ3RWNVNvaTVrVHV6UUt4Z0lxZ1pabCtMV3JOMG5NeHltaXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFWRVF1WWE2U1p5eEwzVHhITTYzV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzRmYTAyMWUtOTQyZC00NmM5LTk2OWQtZWVkZGI1MGU0Y2JmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDI3LFxuICAgICAgMTIzLFxuICAgICAgMjQwLFxuICAgICAgNTYsXG4gICAgICAzLFxuICAgICAgMjUsXG4gICAgICAyMDksXG4gICAgICAxNTUsXG4gICAgICAxNTEsXG4gICAgICA0OCxcbiAgICAgIDYyLFxuICAgICAgMTYxLFxuICAgICAgMTQzLFxuICAgICAgMTI0LFxuICAgICAgMTI4LFxuICAgICAgNDYsXG4gICAgICAxNDcsXG4gICAgICAyNDQsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDE0MyxcbiAgICAgIDIyNixcbiAgICAgIDEzNyxcbiAgICAgIDI1MixcbiAgICAgIDExLFxuICAgICAgMjA2LFxuICAgICAgODcsXG4gICAgICA4NixcbiAgICAgIDgsXG4gICAgICAxOTgsXG4gICAgICAxMSxcbiAgICAgIDEwOCxcbiAgICAgIDE3LFxuICAgICAgOSxcbiAgICAgIDE1NixcbiAgICAgIDQyLFxuICAgICAgOTksXG4gICAgICAyNTEsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTRQNlNZQVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NjQ1MzM2Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTgxNTg0NjI5NzIwODA6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMWHNob2dDRU5HanJyMEdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFqREJQT2FhRTc0MVJjbFppNWZ1dlZvWFhIeFAvWE40ZHdGMXQxZTlhbk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVW44eTg1Nnh0V2EzTE1BaU9mZHdZV3JUcG1BS2RVL1VSZC9xQUJjM0MyTE95UEZmTERHR0g0Y1FkWEt1ejN1K09Mbi94RTNrZlg3ekUya2V4QUtXQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN2o1TFF6a1JZdkg4UTVpQkh1SzNwYVYzOE9vVnNIMzlBeDg5aVFud2c4UW84MGFPcHphcEVQK3F4VEdTUGFGV1N5UFlnZXFUSkNLRytwRmdOK0JaZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg2NDUzMzY3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTI5NzIzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdxT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3FPLmpzb24iOiAie1wia2V5RGF0YVwiOlwieklGaXRxbkRCTTMzeFBQckV4NXJWdldWR1NubFFYSktlSXo5dG5HajdOOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTM3NjAzMDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczOTA0MzE0NjY2NFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
