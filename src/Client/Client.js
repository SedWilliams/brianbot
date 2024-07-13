"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var dotenv = require("dotenv");
var path = require("path");
var MyCommands_1 = require("../MyCommands/MyCommands");
dotenv.config({ path: path.join(process.cwd(), '../../.env') });
//create new connxn to the Discord client, from the bots perspective.
var client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages]
});
client.once(discord_js_1.Events.ClientReady, function (readyClient) {
    console.log("Bot active as " + readyClient.user.tag);
});
client.on(discord_js_1.Events.InteractionCreate, function (interaction) {
    var _a, _b, _c;
    if (!interaction.isCommand()) {
        return;
    }
    if (interaction.commandName === "quote") {
        var quote = MyCommands_1.MyCommands.handleCommand(interaction.commandName, (_a = interaction.options.get("text")) === null || _a === void 0 ? void 0 : _a.value, (_b = interaction.options.get("person")) === null || _b === void 0 ? void 0 : _b.value, (_c = interaction.options.get("context")) === null || _c === void 0 ? void 0 : _c.value);
        var channelID = '1227520089214025790';
        var channel = client.channels.cache.get(channelID);
        if (channel && channel.isTextBased()) {
            channel.send(quote || '').then(function (message) {
                message.pin().catch(function (error) { return console.error('Failed to pin message:', error); });
            }).catch(function (error) { return console.error('Failed to send message:', error); });
        }
        else {
            console.error('The specified channel is not a text-based channel or does not exist.');
        }
        interaction.reply("Quoted.");
    }
    //    interaction object does not have a value "commandName"
});
client.login(process.env.DISCORD_TOKEN);
