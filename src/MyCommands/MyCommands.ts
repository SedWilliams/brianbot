import { CommandInteractionOptionResolver } from "discord.js";
import { Command } from "../types/Command";
import { quote } from "./Commands/quote";
import { CommandsData } from "./CommandsData";

enum possibleCommands {
    quote = "quote",
    dissLogan = "dissLogan",
}

export class MyCommands {

    public getCommands(): Command[] {
        const commands = CommandsData;
        return commands;
    }    

    public static handleCommand(commandName: String, text: any, person: any, context: any) {
       if(commandName != (possibleCommands.quote || possibleCommands.dissLogan)) {
           return;
       }

       if (commandName === possibleCommands.quote) {
          return quote.run(text, person, context);
       }

       if(commandName === possibleCommands.dissLogan) {
           //use outside comand dissLogan 
       }
    }
}