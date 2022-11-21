const Discord = require("discord.js")
const client = new Discord.client(
    { intents: ["GUILDS", "GUILD_MEMBERS" , "GUILD_BANS", "GUILD_MESSAGES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "AUTO_MODERATION_CONFIGURATION", "AUTO_MODERATION_EXECUTION"] }
)

client.login(process.env.token)


