import { Client, Intents } from 'discord.js';
import {meteo, ready} from './botMeteo.js';
const token =process.env.DISCORD_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.login(token);

ready();
meteo();
