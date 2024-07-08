"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncCommands = void 0;
const CommandsInterface_1 = require("./CommandsInterface");
const DiscordInterface_1 = require("./DiscordInterface");
class SyncCommands {
    sync() {
        const CommandsInterfaceInstance = new CommandsInterface_1.CommandsInterface;
        const commands = CommandsInterfaceInstance.sync();
        console.log(commands);
        const discordInterface = new DiscordInterface_1.DiscordInterface;
        discordInterface.updateCommands(commands);
        return commands;
    }
}
exports.SyncCommands = SyncCommands;
const syncAPI = new SyncCommands;
syncAPI.sync();
