const Discord = require('discord.js')
const Config = require('./Config.json')
const mongoose = require('mongoose')
//-------------------------------------------------------
Config.export = {
    param: Config
}
//-------------------------------------------------------
const client = new Discord.Client({
    intents: [
        "DIRECT_MESSAGES",
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGE_TYPING",
        "DIRECT_MESSAGE_REACTIONS",
        "GUILD_VOICE_STATES"
    ]
});
//-------------------------------------------------------
async function connectmongo() {
    try {
        await mongoose.connect(Config.MongoDB.MONGO_URL),
            console.log("Mongo Db Connected")
    }
    catch (e) { }

}
//-----------------------------------------------
client.on("ready", () => {
    client.user.setActivity(`${Config.Bot.PREFIX}help | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members In ${client.guilds.cache.size} Servers!!`, { type: 'WATCHING' })
    connectmongo()
    console.log("Ready!")
})
//------------------------------
const Schema = new mongoose.Schema({
    "Authid": Number,
    "User": String,
    "Status": String,
    "Investeddate": String,
    "InvestedAmount": Number,
    "Currency": String,
    "InvestedDays": Number,
    "interest": Number,
    "ReturnDate": String,
    "Paiddate": String,
    "ReturnAmount": Number

}, { collection: Config.MongoDB.MONGO_COLLECTION })
//----------------------------------------------------------
const Kitten = mongoose.model(Config.MongoDB.MONGO_COLLECTION, Schema)
//-------------------------------------------------------
client.on("message", async message => {
    const Runner = require('./Runner.js');
    Runner(client, message, Config, Kitten);

})
//-------------------------------------------------------
client.login(Config.Bot.TOKEN)
//-------------------------------------------------------
