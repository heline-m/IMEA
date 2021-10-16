const { Client, Intents } = require('discord.js');
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(token)


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on("message",async (msg)  => {

        const tokens = msg.content.split("");
        //if (msg.content === "ping") {
        //msg.reply("pong");
        //}
        if (tokens[0] === "!gif") {
            const keywords = tokens.slice(1, tokens.length).join("");
            const url = `https://g.tenor.com/v1/search?q=${keywords}&key=$process.env.TENOR_KEY}&limit=10`;
            const reponse = await fetch(url);
            const result = await reponse.json();
            const index = Math.floor(Math.random() * result.results.length);
            msg.channel.send(result.results[index].url);


        }

})
//gif('happy');
//module.exports={gif};
