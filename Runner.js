//-------------------------------------------------------
const runner = async (client, message, Config, Kitten) => {
    if (message.content.startsWith(Config.Bot.PREFIX)) {
        const command = message.content.split(' ')[0].slice(Config.Bot.PREFIX.length).toLowerCase()
        const args = message.content.split(' ').slice(1)
        try {
            //-------------------------------------------------------
            try {
                if (command === "pm") {
                    const pm = require('./Commands/Investment/Pm.js')
                    pm(client, message, Config)
                }
            }
            catch (err) { }
            //-------------------------------------------------------
            try {
                if (command === 'ping') {
                    const ping = require('./Commands/System/Ping.js')
                    ping(client, message)
                }
            }
            catch (err) { }
            //-----------------------------------------------
            try {
                if (command === 'help') {
                    const help = require('./Commands/Normal/Help.js')
                    help(client, message, Config)
                }
            }
            catch (err) { }
            //-------------------------------------------------------
            try {
                if (command === 'suprole') {
                    const suprole = require('./Commands/Normal/Supporter.js')
                    suprole(client, message, args, Config)
                }
            }
            catch (err) { }
            //-------------------------------------------------------
            try {
                if (command === 'uptime') {
                    const uptime = require('./Commands/System/Uptime.js')
                    uptime(client, message, args, Config)
                }
            }
            catch (err) { }
            //-------------------------------------------------------
            try {
                if (command === 'add') {
                    const Add = require('./Commands/Investment/Add.js')
                    Add(client, message, args, Config, Kitten)

                }
            }
            catch (err) { }
            //-------------------------------------------------------
            try {
                if (command === 'me') {
                    const me = require('./Commands/Investment/Me.js')
                    me(client, message, args, Config, Kitten)
                }
            }
            catch (err) { }
            //-------------------------------------------------------
            try {
                if (command === 'paid') {
                    const paid = require("./Commands/Investment/Paid")
                    paid(client, message, args, Config, Kitten)

                }
            }
            catch (err) { }
            //-------------------------------------------------------
            try {
                if (command === 'delete') {
                    const Delete = require('./Commands/Investment/Delete.js')
                    Delete(client, message, args, Config, Kitten)
                }
            }
            catch (err) { }

            //-------------------------------------------------------
            try {
                if (command === 'listed') {
                    const listed = require('./Commands/Investment/Listed')
                    listed(client, message, Kitten, Config)

                }
            }
            catch (err) { }
            //-------------------------------------------------------
            try {
                if (command == 'user') {
                    const user = require('./Commands/Investment/User')
                    user(client, message, args, Config, Kitten)

                }
            }
            catch (err) { }
            //-------------------------------------------------------
            try {
                if (command === "export") {
                    const exportcsv = require('./Commands/Investment/Export')
                    exportcsv(client, message, Kitten, Config)

                }
            }
            catch (err) { }
            //-----------------------------------------------------
        }
        catch (err) {

        }
    }
}

//-------------------------------------------------------
module.exports = runner
