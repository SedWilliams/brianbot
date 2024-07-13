import { Client, Events, GatewayIntentBits, InteractionResponse } from "discord.js";
import * as dotenv from 'dotenv';
import * as path from 'path';
import { MyCommands } from "../MyCommands/MyCommands";
import { create } from "domain";
import { ChannelManager } from "discord.js";


dotenv.config({ path: path.join(process.cwd(), '../../.env') });

//create new connxn to the Discord client, from the bots perspective.
const client = new Client(
    {
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] 
    }
);

client.once(Events.ClientReady, (readyClient) => {
    console.log("Bot active as " + readyClient.user.tag);
});

client.on(Events.InteractionCreate, (interaction) => {
    if(!interaction.isCommand()) { return }

    if(interaction.commandName === "quote") {
        const quote = MyCommands.handleCommand(interaction.commandName, interaction.options.get("text")?.value, interaction.options.get("person")?.value, interaction.options.get("context")?.value);
        
        const channelID = '1227520089214025790';
        const channel = client.channels.cache.get(channelID);
        
        if (channel && channel.isTextBased()) {
            channel.send(quote || '').then(message => {
                message.pin().catch(error => console.error('Failed to pin message:', error));
            }).catch(error => console.error('Failed to send message:', error));
        } else {
            console.error('The specified channel is not a text-based channel or does not exist.');
        }

        interaction.reply("Quoted.");
    }
//    interaction object does not have a value "commandName"
});

client.login(process.env.DISCORD_TOKEN);
