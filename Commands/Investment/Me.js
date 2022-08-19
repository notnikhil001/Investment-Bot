const pagination = require('discord-pagination-advanced')
const { MessageEmbed } = require('discord.js')
const pagecreator = require('../Script/PageEmbed.js')
//-------------------------------------------------------
const options = {
    emojis: ["◀️", "▶️"],
    buttonConfig: [
        {
            label: "Previous",
            style: "DANGER",
        },
        {
            label: "Next",
            style: "PRIMARY",
        }]
}
//----------------------------------------------------------
const me = async (client, message, args, Config, Kitten) => {
    try {
        await Kitten.find({
            User: message.author.id
        }).then((result) => {
            if (result == '') {
                const emoji_dinied = client.emojis.cache.get(Config.Emoji.Wrong_Emoji_id)
                const embed = new MessageEmbed()
                    .setColor('RED')
                    .setDescription(` ${emoji_dinied}|| ${message.author} **You Do Not Have Any Active Investment!**`)
                message.reply({ embeds: [embed] })

            }
            if (result.length == 10) {
                const embed = pagecreator(result[0], 1, 10, Config, message)
                const embed2 = pagecreator(result[1], 2, 10, Config, message)
                const embed3 = pagecreator(result[2], 3, 10, Config, message)
                const embed4 = pagecreator(result[3], 4, 10, Config, message)
                const embed5 = pagecreator(result[4], 5, 10, Config, message)
                const embed6 = pagecreator(result[5], 6, 10, Config, message)
                const embed7 = pagecreator(result[6], 7, 10, Config, message)
                const embed8 = pagecreator(result[7], 8, 10, Config, message)
                const embed9 = pagecreator(result[8], 9, 10, Config, message)
                const embed10 = pagecreator(result[9], 10, 10, Config, message)
                const embeds = [embed, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10]
                pagination.paginate(message, embeds, options)

            }

            if (result.length == 9) {
                const embed = pagecreator(result[0], 1, 9, Config, message)
                const embed2 = pagecreator(result[1], 2, 9, Config, message)
                const embed3 = pagecreator(result[2], 3, 9, Config, message)
                const embed4 = pagecreator(result[3], 4, 9, Config, message)
                const embed5 = pagecreator(result[4], 5, 9, Config, message)
                const embed6 = pagecreator(result[5], 6, 9, Config, message)
                const embed7 = pagecreator(result[6], 7, 9, Config, message)
                const embed8 = pagecreator(result[7], 8, 9, Config, message)
                const embed9 = pagecreator(result[8], 9, 9, Config, message)
                const embeds = [embed, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9]
                pagination.paginate(message, embeds, options)

            }
            if (result.length == 8) {
                const embed = pagecreator(result[0], 1, 8, Config, message)
                const embed2 = pagecreator(result[1], 2, 8, Config, message)
                const embed3 = pagecreator(result[2], 3, 8, Config, message)
                const embed4 = pagecreator(result[3], 4, 8, Config, message)
                const embed5 = pagecreator(result[4], 5, 8, Config, message)
                const embed6 = pagecreator(result[5], 6, 8, Config, message)
                const embed7 = pagecreator(result[6], 7, 8, Config, message)
                const embed8 = pagecreator(result[7], 8, 8, Config, message)
                const embeds = [embed, embed2, embed3, embed4, embed5, embed6, embed7, embed8]
                pagination.paginate(message, embeds, options)

            }
            if (result.length == 7) {
                const embed = pagecreator(result[0], 1, 7, Config, message)
                const embed2 = pagecreator(result[1], 2, 7, Config, message)
                const embed3 = pagecreator(result[2], 3, 7, Config, message)
                const embed4 = pagecreator(result[3], 4, 7, Config, message)
                const embed5 = pagecreator(result[4], 5, 7, Config, message)
                const embed6 = pagecreator(result[5], 6, 7, Config, message)
                const embed7 = pagecreator(result[6], 7, 7, Config, message)
                const embeds = [embed, embed2, embed3, embed4, embed5, embed6, embed7]
                pagination(message, embeds, options)

            }
            if (result.length == 6) {
                const embed = pagecreator(result[0], 1, 6, Config, message)
                const embed2 = pagecreator(result[1], 2, 6, Config, message)
                const embed3 = pagecreator(result[2], 3, 6, Config, message)
                const embed4 = pagecreator(result[3], 4, 6, Config, message)
                const embed5 = pagecreator(result[4], 5, 6, Config, message)
                const embed6 = pagecreator(result[5], 6, 6, Config, message)
                const embeds = [embed, embed2, embed3, embed4, embed5, embed6]
                pagination(message, embeds = [embed, embed2, embed3, embed4, embed5, embed6], options)



            }
            if (result.length == 5) {
                const embed = pagecreator(result[0], 1, 5, Config, message)
                const embed2 = pagecreator(result[1], 2, 5, Config, message)
                const embed3 = pagecreator(result[2], 3, 5, Config, message)
                const embed4 = pagecreator(result[3], 4, 5, Config, message)
                const embed5 = pagecreator(result[4], 5, 5, Config, message)
                pagination(message, embeds = [embed, embed2, embed3, embed4, embed5], options)

            }
            if (result.length == 4) {
                const embed = pagecreator(result[0], 1, 4, Config, message)
                const embed2 = pagecreator(result[1], 2, 4, Config, message)
                const embed3 = pagecreator(result[2], 3, 4, Config, message)
                const embed4 = pagecreator(result[3], 4, 4, Config, message)
                pagination(message, embeds = [embed, embed2, embed3, embed4], options)

            }
            if (result.length == 3) {
                const embed = pagecreator(result[0], 1, 3, Config, message)
                const embed2 = pagecreator(result[1], 2, 3, Config, message)
                const embed3 = pagecreator(result[2], 3, 3, Config, message)
                pagination(message, pages = [embed, embed2, embed3], options)


            }
            if (result.length == 2) {
                const embed = pagecreator(result[0], 1, 2, Config, message)
                const embed2 = pagecreator(result[1], 2, 2, Config, message)
                pagination(message, pages = [embed, embed2], options)

            }
            if (result.length == 1) {
                embed = pagecreator(result[0], 1, 1)
                pagination(message, pages = [embed], options)

            }

        })
    }
    catch (err) {

    }
}


module.exports = me
