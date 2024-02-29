import { CommandsInterface } from './CommandsInterface';
import { DiscordInterface } from './DiscordInterface';
import { Command } from '../types/Command';

export class SyncCommands {
    public sync(): Command[] {
        const CommandsInterfaceInstance = new CommandsInterface;
        const commands = CommandsInterfaceInstance.sync();
        console.log(commands);

        const discordInterface = new DiscordInterface;
        discordInterface.updateCommands(commands);

        return commands;
    }
}

const syncAPI = new SyncCommands;

syncAPI.sync();
