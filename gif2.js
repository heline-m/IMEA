const {Client, Intents} = require('discord.js');
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
client.login(token)

const prefix = "!";
var XMLHttpRequest = require('xhr2');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase();
    switch (cmd) {
        case "gif":
            var test = args[1];
            message.reply(grab_data(test));
            break;
        case "test":
            message.reply("fonction");
            break;
        default:
            message.reply("ce n'est pas une commande valide");
            break;
    }
});

// url Async requesting function
function httpGetAsync(theUrl, callback)
{
    // create the request object
    var xmlHttp = new XMLHttpRequest();

    // set the state change callback to capture when the response comes in
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            callback(xmlHttp.responseText);
        }
    }

    // open as a GET call, pass in the url and set async = True
    xmlHttp.open("GET", theUrl, true);

    // call send with no params as they were passed in on the url string
    xmlHttp.send(null);

    return;
}

// callback for the top 8 GIFs of search
function tenorCallback_search(responsetext)
{
    // parse the json response
    var response_objects = JSON.parse(responsetext);

    top_10_gifs = response_objects["results"];

    // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)

    document.getElementById("preview_gif").src = top_10_gifs[0]["media"][0]["nanogif"]["url"];

    document.getElementById("share_gif").src = top_10_gifs[0]["media"][0]["tinygif"]["url"];

    return;

}


// function to call the trending and category endpoints
function grab_data(src)
{
    // set the apikey and limit
    var apikey = process.env.API_TOKEN;
    var lmt = 8;

    // test search term
    var search_term = src;

    // using default locale of en_US
    var search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
        apikey + "&limit=" + lmt;

    httpGetAsync(search_url,tenorCallback_search);

    // data will be loaded by each call's callback
    return;
}
