const Discord = require("discord.js")

require ("dotenv").config() // carica le env variabili in variabili globali

const client = new Discord.Client({
    intents :[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//messaggi
client.on("messageCreate", (message) => {
    let message_response = {"sapobully": "https://www.honiro.it/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-24-at-12.51.31.jpeg",
    "autobianchi" : "vaffanculo zoccola",  
    "hey mercedes" : "https://cdn.discordapp.com/attachments/768898886696697910/881487180323758120/themillionaire10-20190514_102123-60382270_2087493697966081_8624868350706787525_n..mp4",
    "server rsod": "https://cdn.discordapp.com/attachments/768898886696697910/954124775041667122/Z.png",
}

})

client.login(process.env.TOKEN)