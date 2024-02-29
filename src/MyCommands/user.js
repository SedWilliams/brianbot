const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("User.")
        .setDescription("This command contains information about a user."),
    async execute(interaction) {
        await interaction.reply(`This command was run by: ${interaction.user.username}`);
    },
};
