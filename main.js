const { Client, Intents } = require('discord.js');
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
console.log(token);
//const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//client.login(token);
