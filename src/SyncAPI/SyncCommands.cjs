"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncCommands = void 0;
var CommandsInterface_1 = require("./CommandsInterface");
var DiscordInterface_1 = require("./DiscordInterface");
var SyncCommands = /** @class */ (function () {
    function SyncCommands() {
    }
    SyncCommands.prototype.sync = function () {
        var CommandsInterfaceInstance = new CommandsInterface_1.CommandsInterface;
        var commands = CommandsInterfaceInstance.sync();
        console.log(commands);
        var discordInterface = new DiscordInterface_1.DiscordInterface;
        discordInterface.updateCommands(commands);
        return commands;
    };
    return SyncCommands;
}());
exports.SyncCommands = SyncCommands;
var syncAPI = new SyncCommands;
syncAPI.sync();
