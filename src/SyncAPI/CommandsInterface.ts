import { MyCommands } from "../MyCommands/MyCommands";
import { Command } from "../types/Command"

export class CommandsInterface {

    public sync(): Command[] {
        const commands = this.getCommands();
        return commands;
    }

    private getCommands(): Command[] {
        //query commands and return them
        //expect array of objects typed 'Command'
        const accessMyCommands = new MyCommands;
        return accessMyCommands.getCommands();
    }

}
