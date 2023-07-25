const { Client, GatewayIntentBits, Events } = require("discord.js");

const dotenv = require("dotenv");
dotenv.config();

const TOKEN = "MTAwMDE2Nzc2NTkxNjc4NjkwOA.G2jAe4.Fbb6u2AXDGmalHnHNTpuC_4CXIghuY2O8fUz_o";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.on('ready', () => {
    console.log("Bot is online.");
});

client.login(TOKEN);
