const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Africa,Nigeria."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347061062548";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349011185484";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_16_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDk5LFxuICAgICAgICA5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDk2LFxuICAgICAgICA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg2LFxuICAgICAgICA3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3LFxuICAgICAgICA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibFIrZEl5TGxhOVg3RWhYbnVqbm1VM2FjT3JNd1JQSjFpdy92aGdXd1dNRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQnh6cXI3UUlUUGFEdHVQSUhsSmo4UVwiLFxuICBcInBob25lSWRcIjogXCIxNTdkNDlkZC1kYzYzLTQ3MTctOTAxYi05YTE0ZmUyMmFlYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAyMTYsXG4gICAgICAxMjcsXG4gICAgICAxODUsXG4gICAgICAxNyxcbiAgICAgIDEwMixcbiAgICAgIDEwMSxcbiAgICAgIDMxLFxuICAgICAgMjEzLFxuICAgICAgNTcsXG4gICAgICA5OSxcbiAgICAgIDE0OCxcbiAgICAgIDM4LFxuICAgICAgMTU5LFxuICAgICAgMCxcbiAgICAgIDIwMyxcbiAgICAgIDEzNSxcbiAgICAgIDE0NCxcbiAgICAgIDE4NCxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDI4LFxuICAgICAgMjAyLFxuICAgICAgMjIsXG4gICAgICAxNjYsXG4gICAgICAxOTQsXG4gICAgICAzNyxcbiAgICAgIDc5LFxuICAgICAgNzgsXG4gICAgICA1LFxuICAgICAgNjAsXG4gICAgICAxNzgsXG4gICAgICAxNzEsXG4gICAgICAxMTUsXG4gICAgICA5NCxcbiAgICAgIDEzOCxcbiAgICAgIDExNCxcbiAgICAgIDE4NixcbiAgICAgIDgwLFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVMN045V0gzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDExMTg1NDg0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOCgCDwnZWL8J2VlvCdlZ7wnZWh8J2VlvCdlaTwnZWlIPCdlLnwnZWd8J2VkvCdlZXwnZWWIPCTgoBcIixcbiAgICBcImxpZFwiOiBcIjI1NTc3MDE2Nzg4MTkyNjoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTHJ2djRFRVBtbTQ3a0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpOY293cGw1WnBqVHdJd1hJR1NQbGcwZ1BUaEZ1NllIMGpmd2RJeTBGMFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMmU1UHdBRXd6c2V5RGZMSEVYM0NRMDVIRDFjdGJ1WWxBTmJrcFFSL01NbU9DaC8rbjlTbnZ2MER4enp5RTlaVnpFQVVtQ0Y3VDlqb2g4UEZ3NmczRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZU44a3l4RStudGNKV0hpeXNuSzFTeTN5cEVnUGhtZ3lyQk1NUTY2c3ordlBsN2Q3d1BDcTFETkE4bE5wT3Nsd0ZzS3RiZkNwYnJxQVRodjFUWWM1Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMTE4NTQ4NDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNzc3NDA2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
