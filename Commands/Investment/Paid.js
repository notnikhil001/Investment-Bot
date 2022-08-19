const { MessageEmbed } = require('discord.js')
const checker = require('../Script/Checker.js')
//-------------------------------------------------------
const paid = async (client, message, args, Config, Kitten) => {
    try {
        var today = new Date()
        var todaydate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        const emoji_dinied = client.emojis.cache.get(Config.Emoji.Wrong_Emoji_id)
        const answer = await checker(message, Config, emoji_dinied)
        if (answer === true) {

            return
        }
        else {
            Kitten.findOneAndUpdate({ 'Authid': parseFloat(args[0]) }, { Status: "Paid", Paiddate: '`' + todaydate + '`' }, function (err, result) {
                const emoji_check = client.emojis.cache.get(Config.Emoji.Check_Emoji_id)
                try {
                    if (result.Status == 'Not Paid') {
                        const embed = new MessageEmbed()
                            .setColor('GREEN')
                            .setDescription(`**${emoji_check} || Payment Of <@${result.User}> Is Marked As Paid !!**`)
                        message.reply({ embeds: [embed] })

                    }
                    if (result.Status == 'Paid') {
                        const embe = new MessageEmbed()
                            .setColor('RED')
                            .setDescription(`**${emoji_dinied} || Payment Of <@${result.User}> Is Already Paid**`)
                        message.reply({ embeds: [embe] })
                    }
                }
                catch (err) {

                    message.reply(`**${message.author} ,` + '`' + `${args[0]}` + '`' + `Is Not Associated With Any Payment !!**`)
                }
            })
        }
    }
    catch (err) {

    }
}
//-------------------------------------------------------
module.exports = paid 
