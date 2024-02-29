"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsInterface = void 0;
var MyCommands_1 = require("../MyCommands/MyCommands");
var CommandsInterface = /** @class */ (function () {
    function CommandsInterface() {
    }
    CommandsInterface.prototype.sync = function () {
        var commands = this.getCommands();
        return commands;
    };
    CommandsInterface.prototype.getCommands = function () {
        //query commands and return them
        //expect array of objects typed 'Command'
        var accessMyCommands = new MyCommands_1.MyCommands;
        return accessMyCommands.getCommands();
    };
    return CommandsInterface;
}());
exports.CommandsInterface = CommandsInterface;
