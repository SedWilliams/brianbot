import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Command } from '../types/Command';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../.env') }); // Adjust the path as needed

class DiscordRestAPIConnection {
    private token: string;
    private clientId: string;

    constructor() {
        this.token = process.env.DISCORD_TOKEN || ''; // Access token from environment variable
        this.clientId = process.env.APPLICATIONID || '';
    }

    public async updateCommands(commands: Command[]): Promise<void> {
        const rest = new REST({ version: '9' }).setToken(this.token);

        try {
            await rest.put(
                Routes.applicationGuildCommands(this.clientId, '<your guild ID>'), // Replace <your guild ID> with your actual guild ID or 'global' for global commands
                { body: commands },
            );

            console.log('Successfully updated commands.');
        } catch (error) {
            console.error('Error updating commands:', error);
        }
    }
}

export { DiscordRestAPIConnection };