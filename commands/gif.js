const {TENOR_KEY} = require("../config.json");
const TENOR = require("tenorjs").client({
    Key: TENOR_KEY,
    Filter: "off",
    Locale: "fr_FR",
    MediaFilter: "minimal",
    DateFormat : "D/MM/YYYY - H:mm:ss A"
});
module.exports.gif = command;
const {CommandInteraction} = require("discord.js");

/**
 *
 * @param {CommandInteraction} interaction
 */
function command (interaction){
    console.log("gif entrée")
    if(interaction.options.get("mot_clef")){
        const mot_clef = interaction.options.get("mot_clef");
        TENOR.Search.Random(mot_clef, "1").then(function (reponse){
            interaction.reply(reponse[0].url);
        })
    }
    else {
        TENOR.Search.Random(null, "1").then(function (reponse){
            interaction.reply(reponse[0].url);
        })
    }

}