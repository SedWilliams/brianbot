import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Command } from '../types/Command';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(process.cwd(), '../.env') });

//This class is instantiated in a seperate class, where the updateCommands method is called
//and passed my commands data
export class DiscordInterface {
    private token: string;
    private clientId: string;

    constructor() {
        this.token = process.env.DISCORD_TOKEN || '';
        this.clientId = process.env.APPLICATIONID || '';
    }

    //called from outside and passed array of custom type, and holding two objects each with name and description properties
    public async updateCommands(commands: Command[]) {
        const rest = new REST({ version: '9' }).setToken(this.token);

        try {
            await rest.put(
                Routes.applicationCommands(this.clientId),
                { body: commands },
            );

            console.log('Successfully updated commands.');
        } catch (error) {
            console.error('Error updating commands:', error);
        }
    }
}
