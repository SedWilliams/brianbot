import { Client, Events, GatewayIntentBits } from "discord.js";
import * as dotenv from 'dotenv';
import * as path from 'path';
import { MyCommands } from "../MyCommands/MyCommands";

dotenv.config({ path: path.join(process.cwd(), '../.env') });

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
    console.log("Bot active as " + readyClient.user.tag);
});

client.on(Events.InteractionCreate, (interaction) => {
    if(!interaction.isCommand()) { return }

    if(interaction.commandName === "quote") {
        const quote = MyCommands.handleCommand(interaction.commandName, interaction.options.get("text")?.value, interaction.options.get("person")?.value, interaction.options.get("context")?.value);
        interaction.(quote || '').then(
            res => {
                res.pin();
            }
        );

    }
//    interaction object does not have a value "commandName"
});

client.login(process.env.DISCORD_TOKEN);