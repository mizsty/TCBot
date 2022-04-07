const Discord = require("discord.js")
require("dotenv").config()

// const generateImage = require("./generateImage")

// const answers = ["When you actually get laid (never)", "Idk, ask your mom", "No idea, but don't ask Gamu", "At some point within the next century", "Alt + F4 to find out"]

const client = new Discord.Client({
    intents: [
        "GUILDS", 
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "n.",
    owners: ["699394539164663819"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

// client.on("ready", () => {
//    console.log(`Logged in as ${client.user.tag}`)
// })

// client.on("messageCreate", (message) => {
//    if (message.content == "when server") {
//       let randomMessageIndex = Math.floor(Math.random() * answers.length)

        
//        message.reply(answers[randomMessageIndex])
        
//    }
//})

// const welcomeChannelId = "960606307839246397"

// client.on("guildMemberAdd", async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChannelId).send({
//         content: `<@${member.id}> Welcome to Terracraft!`,
//         files: [img]
//     })
// })  

client.login(process.env.TOKEN)
