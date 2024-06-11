const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_36_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICA1MyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDUwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICA2NSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxVGo4RGR0VnJROERSQW1MbGp3MTdreEpsa2JFbTF0QmJNNUhWd0pTS3VzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhRXpHa2NPNlFSdVdNbWw3SGlDSnhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwYzVlYTM3LTZhNGEtNGIwNS05ODNlLTBlM2U4ZjA1MjU5M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAzMSxcbiAgICAgIDI0MSxcbiAgICAgIDEwLFxuICAgICAgMjA3LFxuICAgICAgMTc2LFxuICAgICAgNjAsXG4gICAgICAyMzcsXG4gICAgICAxNTAsXG4gICAgICA3NSxcbiAgICAgIDE1MixcbiAgICAgIDczLFxuICAgICAgMTgzLFxuICAgICAgMTg2LFxuICAgICAgMjAzLFxuICAgICAgMTkyLFxuICAgICAgMTksXG4gICAgICAxMTUsXG4gICAgICA0OCxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDE2OCxcbiAgICAgIDk0LFxuICAgICAgNjksXG4gICAgICAyMTEsXG4gICAgICAyNDIsXG4gICAgICAxNixcbiAgICAgIDExOCxcbiAgICAgIDQwLFxuICAgICAgMTUyLFxuICAgICAgMjAwLFxuICAgICAgMTMxLFxuICAgICAgMzYsXG4gICAgICA2MCxcbiAgICAgIDQ5LFxuICAgICAgMjM3LFxuICAgICAgNzYsXG4gICAgICA4MixcbiAgICAgIDI1MyxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBZN0hERFhMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDczNjAxMDQ1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY0MzIxNDYzODQwODQ2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnZuaTZrRkVLMnlvck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhL01oYUtUU2NWOXdjZ25RNHlnbDFjdUxodkdmSUFienpIbkFUR25ZdlJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpJS0l2RnhjNVRteDVERXF0TmE5NGdKTzhGMk5zRlE5QW5IeWRlcEdjWjBSQjZGRkpFbjRrSkFMOURqZyt5TUN3L3pxZ2xQYnFxc0s0VFhYNXRONkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9VaHF1Zng0SnFJZFZYaVBQaDVmb1BSVjY5amxaY21rNE5sSWZ2UnR6bVhyZXh0ZzVCNkc0RXpLU3U1S0wvbEw2TmR4TVl4WnVOOEVFMXNuMmp1emd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzM2MDEwNDU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgxMzA5OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGL3pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUYvei5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
