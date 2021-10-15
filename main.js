import { Client, Intents } from 'discord.js';
import { meteo, ready} from './botMeteo.js';
import * as weather from 'openweather-apis';
import {commands} from './commands.json';

const token =process.env.DISCORD_TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.login(token);

function updateCommand(server) {
    const {REST} = require('@discordjs/rest');
    const {Routes} = require('discord-api-types/v9');
    const rest = new REST({version: '9'}).setToken(token);

    rest.put(Routes.applicationGuildCommands(client.user.id, server.id), { body: commands}).catch(console.error);
}

client.on('ready', function(){
    client.guilds.fetch().then(function(servers){
        server.forEach(function(server){
            updateCommand(server);
        })
    })
});

const tokenAPI = process.env.API_WEATHER_TOKEN;
weather.setAPPID(tokenAPI);
weather.setLang("FR");
weather.setUnits("Metric");

ready();
meteo();

// import { Client, Intents } from 'discord.js';
// import {meteo, ready} from './botMeteo.js';
// import * as weather from 'openweather-apis';
//
// const token =process.env.DISCORD_TOKEN;
//
// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//
// client.login(token);
//
// const tokenAPI = process.env.API_WEATHER_TOKEN;
// weather.setAPPID(tokenAPI);
// weather.setLang("FR");
// weather.setUnits("Metric");
//
// ready();
// meteo("Nantes");