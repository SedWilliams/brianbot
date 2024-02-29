"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCommands = void 0;
var CommandsData_1 = require("./CommandsData");
var MyCommands = /** @class */ (function () {
    function MyCommands() {
    }
    MyCommands.prototype.getCommands = function () {
        var commands = CommandsData_1.CommandsData;
        return commands;
    };
    return MyCommands;
}());
exports.MyCommands = MyCommands;
