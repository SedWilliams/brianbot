"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsInterface = void 0;
const MyCommands_1 = require("../MyCommands/MyCommands");
class CommandsInterface {
    sync() {
        const commands = this.getCommands();
        return commands;
    }
    getCommands() {
        //query commands and return them
        //expect array of objects typed 'Command'
        const accessMyCommands = new MyCommands_1.MyCommands;
        return accessMyCommands.getCommands();
    }
}
exports.CommandsInterface = CommandsInterface;
