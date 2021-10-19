# IMEA
Présente son bot discord qui permet à l'utilisateur d'obtenir des GIF de façon aléatoire.
***
## table des matières
1. [Description du bot](#Description)
2. [Environnement de développement](#IDE)
3. [Technologies utilisées](#Technologies)
4. [Installation de l'application](#Installation)
5. [Lancement de l'application](#Lancement)
6. [Du côté de l'utilisateur](#Fonctionnalité)
7. [Sources](#Sources)
### Description
***
* Bot discord distributeur de GIFS
* Grâce à ce Bot discord, obtenez des GIFS sympas.
* Vous récupérez les GIFS de Tenor aléatoirement.
### IDE
***
* IntelliJ
* Windows 10
### Technologies
***
* Javascript
* [Node.js](https://nodejs.org/en/) : Version 14.18.0
### Installation
***
* S'assurer que node est bien installé pour le debug de la calculatrice
* Il faut cloner le repo puis se positionner dans votre dossier
* Installer les packages nécessaires
* Récupérer le token du discord et le placer dans un fichier .env
* Création d'une nouvelle application discord :
    - clicker sur l'application créée;
    - copier l'application Id;
    - le coller dans un fichier .env (qui sera, bien sur, ignoré dans le .gitignore);
    - via le menu, aller dans "BOT";
    - clicker sur "add a bot", confirmer;
    - copier votre token de votre BOT et le coller également dans le .env;
    - via le menu principal, aller dans 0Auth2;
    - dans "URL generator", cocher les scopes "bot" et "applications.commands";
    - copier le lien généré;
    - le coller dans le navigateur;
    - Inviter son bot discord dans le serveur choisi.
* Récupérer la clef de l'API Tenor [tenor.com](https://tenor.com/developer/keyregistration)
```
node -v
$ git clone https://github.com/RepoDeLAdminGit/botGif.git
cd ..\IdeaProjects\nom de votre projet
npm install node@16
npm install discord.js
npm install discord.js @discordjs/rest discord-api-types
npm install xhr2
npm install tenorjs
```
### Lancement
***
npm run main.js
### Fonctionnalités
***
Pour appeler un GIF via son BOT :
* /gif
### Sources
***
* [discord.js.org](https://discord.js.org/#/)
* [discord.com](https://discord.com/developers/applications)
* [tenor.com](https://tenor.com/)
