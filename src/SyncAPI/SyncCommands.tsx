import { CommandsInterface } from './CommandsInterface';
import { DiscordInterface } from './DiscordInterface';

class SyncCommands {
    public sync(): any {
        const commandsInterface = new CommandsInterface;
        const commands = commandsInterface.sync();

        const discordInterface = new DiscordInterface;
        discordInterface.sync(commands);
    }
}

export { SyncCommands };
