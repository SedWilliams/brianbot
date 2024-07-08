"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordInterface = void 0;
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
dotenv.config({ path: path.join(process.cwd(), '../.env') });
//This class is instantiated in a seperate class, where the updateCommands method is called
//and passed my commands data
class DiscordInterface {
    token;
    clientId;
    constructor() {
        this.token = process.env.DISCORD_TOKEN || '';
        this.clientId = process.env.APPLICATIONID || '';
    }
    //called from outside and passed array of custom type, and holding two objects each with name and description properties
    async updateCommands(commands) {
        const rest = new rest_1.REST({ version: '9' }).setToken(this.token);
        try {
            await rest.put(v9_1.Routes.applicationCommands(this.clientId), { body: commands });
            console.log('Successfully updated commands.');
        }
        catch (error) {
            console.error('Error updating commands:', error);
        }
    }
}
exports.DiscordInterface = DiscordInterface;
