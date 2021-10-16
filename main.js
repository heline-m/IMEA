//
//import{gif} from './gif';
/*const {gif} = require('./gif');

const token = process.env.DISCORD_TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(token)


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
*/
//gif();

/*require('dotenv').config();





client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
*/
// loger le bot
const {DISCORD_TOKEN} = require('./config.json');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const {commands} = require('./commands.json')
//const fetch = require('node-fetch');

client.login(DISCORD_TOKEN);

function updateCommand(server){
    const {REST} = require('@discordjs/rest');
    const {Routes} = require('discord-api-types/v9');
    const rest = new REST({version: '9'}).setToken(DISCORD_TOKEN);
    require('dotenv').config();

    rest.put(Routes.applicationGuildCommands(client.user.id, server.id), {body: commands}).catch(console.error);
}

client.on('ready', function(){
    client.guilds.fetch().then(function (serveurs){
        serveurs.forEach(function (serveur){
            updateCommand(serveur);
        })
    })
})

client.on('interactionCreate', async function (interaction){
    if(interaction.isCommand()){
        switch(interaction.commandName){
            case "gif" :
                const {gif} = require("./commands/gif")
                gif(interaction);
                break;
            default:
                interaction.reply("Commande non implémentée");
                break;
        }
    }

})
