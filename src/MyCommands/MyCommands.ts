import { Command } from "../types/Command";
import { CommandsData } from "./CommandsData";

export class MyCommands {
    
    public getCommands(): Command[] {
        const commands = CommandsData;
        return commands;
    }    

}