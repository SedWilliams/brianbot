import { Client, Events, GatewayIntentBits, InteractionResponse } from "discord.js";
import * as dotenv from 'dotenv';
import * as path from 'path';
import { MyCommands } from "../MyCommands/MyCommands";
import { create } from "domain";

dotenv.config({ path: path.join(process.cwd(), '../.env') });

//create new connxn to the Discord client, from the bots perspective.
const client = new Client(
    {
        intents: [GatewayIntentBits.Guilds] 
    }
);

client.once(Events.ClientReady, (readyClient) => {
    console.log("Bot active as " + readyClient.user.tag);
});

client.on(Events.InteractionCreate, (interaction) => {
    if(!interaction.isCommand()) { return }

    if(interaction.commandName === "quote") {
        const quote = MyCommands.handleCommand(interaction.commandName, interaction.options.get("text")?.value, interaction.options.get("person")?.value, interaction.options.get("context")?.value);
        
        interaction.reply(quote || '');
    }
//    interaction object does not have a value "commandName"
});

client.login(process.env.DISCORD_TOKEN);