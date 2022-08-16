const { MessageEmbed } = require('discord.js')
const checker = require('../Script/Checker.js')
//-------------------------------------------------------
const delete_inv = async (client, message, args, Config, Kitten) => {
    const emoji_dinied = client.emojis.cache.get(Config.Emoji.Wrong_Emoji_id)
    const answer = await checker(message, Config, emoji_dinied)
    if (answer === true) {
        return
    }
    else {
        Kitten.findOneAndRemove({ 'Authid': parseFloat(args[0]) }, function (error, result) {
            const emoji_dinied = client.emojis.cache.get(Config.Emoji.Wrong_Emoji_id)
            const emoji_check = client.emojis.cache.get(Config.Emoji.Check_Emoji_id)
            try {
                const embed = new MessageEmbed()
                    .setColor('RED')
                    .setDescription(`**${emoji_check} || Payment Of <@${result.User}> Succesfully Deleted !!**`)
                message.reply({ embeds: [embed] })

            }
            catch (err) {
                const embedo = new MessageEmbed()
                    .setColor('RED')
                    .setDescription(`${emoji_dinied} || ${message.author} **Id Not Associated With Any Investment!**`)
                message.reply({ embeds: [embedo] })

            }
        }
        )
    }
}



module.exports = delete_inv
