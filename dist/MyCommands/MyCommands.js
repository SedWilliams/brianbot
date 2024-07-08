"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCommands = void 0;
const quote_1 = require("./Commands/quote");
const CommandsData_1 = require("./CommandsData");
var possibleCommands;
(function (possibleCommands) {
    possibleCommands["quote"] = "quote";
    possibleCommands["dissLogan"] = "dissLogan";
})(possibleCommands || (possibleCommands = {}));
class MyCommands {
    getCommands() {
        const commands = CommandsData_1.CommandsData;
        return commands;
    }
    static handleCommand(commandName, text, person, context) {
        if (commandName != (possibleCommands.quote || possibleCommands.dissLogan)) {
            return;
        }
        if (commandName === possibleCommands.quote) {
            return quote_1.quote.run(text, person, context);
        }
        if (commandName === possibleCommands.dissLogan) {
            //use outside comand dissLogan 
        }
    }
}
exports.MyCommands = MyCommands;
