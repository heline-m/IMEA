export const ready =()=> {
    console.log("Ready !");
};

const prefixCmd = '!';

export const meteo = (msg) => {
//L'appel de la météo doit être préfixé
    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return
//Peu importe la longueur du message, on le préfixe
     const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
     const command = args.shift().toLowerCase();

     if (command === "weather") {
         msg.reply("Le temps d'aujourd'hui !");
     }
};

