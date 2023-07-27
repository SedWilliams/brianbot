
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Ping.")
        .setDescription("Pong."),
    async execute(interaction) {
        await interaction.reply("Pong.");
    },
};
