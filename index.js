const Discord = require("discord.js")
const { MembershipStates } = require("discord.js/typings/enums")

require ("dotenv").config() // carica le env variabili in variabili globali

const client = new Discord.Client({
    intents :[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//messaggi
client.on("messageCreate", (message) => {
    if (message.content == "sapobully"){
        message.reply("https://www.honiro.it/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-24-at-12.51.31.jpeg")
}
})

const welcomeChannelId="954121885375942668"

client.on("guildMemberAdd", (member) =>{
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> benvenuto nello shitpost coglionz`)
})



client.login(process.env.TOKEN)