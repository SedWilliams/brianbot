"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCommands = void 0;
var quote_1 = require("./Commands/quote");
var CommandsData_1 = require("./CommandsData");
var possibleCommands;
(function (possibleCommands) {
    possibleCommands["quote"] = "quote";
    possibleCommands["dissLogan"] = "dissLogan";
})(possibleCommands || (possibleCommands = {}));
var MyCommands = /** @class */ (function () {
    function MyCommands() {
    }
    MyCommands.prototype.getCommands = function () {
        var commands = CommandsData_1.CommandsData;
        return commands;
    };
    MyCommands.handleCommand = function (commandName, text, person, context) {
        if (commandName != (possibleCommands.quote || possibleCommands.dissLogan)) {
            return;
        }
        if (commandName === possibleCommands.quote) {
            return quote_1.quote.run(text, person, context);
        }
        if (commandName === possibleCommands.dissLogan) {
            //use outside comand dissLogan 
        }
    };
    return MyCommands;
}());
exports.MyCommands = MyCommands;
