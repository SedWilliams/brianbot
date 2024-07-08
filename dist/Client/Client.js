"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
const MyCommands_1 = require("../MyCommands/MyCommands");
dotenv.config({ path: path.join(process.cwd(), '../.env') });
//create new connxn to the Discord client, from the bots perspective.
const client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds]
});
client.once(discord_js_1.Events.ClientReady, (readyClient) => {
    console.log("Bot active as " + readyClient.user.tag);
});
client.on(discord_js_1.Events.InteractionCreate, (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    if (interaction.commandName === "quote") {
        const quote = MyCommands_1.MyCommands.handleCommand(interaction.commandName, interaction.options.get("text")?.value, interaction.options.get("person")?.value, interaction.options.get("context")?.value);
        interaction.reply(quote || '');
    }
    //    interaction object does not have a value "commandName"
});
client.login(process.env.DISCORD_TOKEN);
