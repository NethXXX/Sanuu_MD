const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: precess.env.ALIVE_IMG || "https://telegra.ph/file/acb5d9378fdf2923a7f49.jpg",
ALIVE_MSG: precess.env.ALIVE_MSG || "╭────────────◉◉►\n\n│Hey, I'm Sanuu MD\n\n│Created By Mr.Nethmika✨🍂\n\n╰────────────◉◉►\n\n✎🍔  𝐒ａ𝔫Ⓤù 𝔪∂  💘💢"
};
