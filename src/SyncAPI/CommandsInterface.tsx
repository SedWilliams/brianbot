import { } from "../MyCommands";
import { Command } from "../types/Command"

export class CommandsInterface {

    public sync(): Command[] {
        this.getCommands();
    }

    private getCommands(): Command[] {
        //query commands and return them
        //expect array of objects typed 'Command'
    }

}