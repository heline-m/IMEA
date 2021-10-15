import * as weather from "openweather-apis";
import discord  from 'discord.js';

const client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
//const { prefix, token, apitoken } = import ('./config.json');
//const axios = require('axios')

export const ready =()=> {
    console.log("Ready !");
};

const prefixCmd = '!';

//export const axios = (msg) => {
//L'appel de la météo doit être préfixé
  //  if(false){
  //  }else{
  //      axios
  //          .get(
  //              'http://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${apitoken}'
  //             )
  //          .then(response => {
  //               let apiData = response;
  //               let currentTemp = Math.ceil(apiData.data.main.temp)
  //               let maxTemp = apiData.data.main.temp_max;
  //               let minTemp = apiData.data.main.temp_min;
  //               let humidity = apiData.data.main.humidity;
  //               let wind = apiData.data.wind.speed;
  //               let author = message.author.username
  //               let profile = message.author.displayAvatarURL
  //               // let icon = apiData.data.weather[0].icon
  //               let cityName = args
  //               let country = apiData.data.sys.country
  //               let pressure = apiData.data.main.pressure;
  //             let cloudness = apiData.data.weather[0].description;
  //              message.channel.send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country));
  //          }).catch(err => {
  //          message.reply(`Enter a vailid city name`)
  //      })
  //  }
//Peu importe la longueur du message, on le préfixe
//      const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
//      const command = args.shift().toLowerCase();
//
//      if (command === "weather") {
//          msg.reply("Le temps d'aujourd'hui !");
//      }
// };
/**
 *
 * @param {string} ville
 */
export const meteo = (ville)=>{
    weather.setCity(ville);
    weather.getDescription(function(err, response){
        if(err) console.error(err);
        console.log(response);
    });
}

