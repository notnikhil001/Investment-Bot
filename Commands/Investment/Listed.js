const checker = require('../Script/Checker.js')
//----------------------------------------------
const listed = async (client, message, Kitten, Config) => {
    try {
        const emoji_dinied = client.emojis.cache.get(Config.Emoji.Wrong_Emoji_id)
        const answer = await checker(message, Config, emoji_dinied)
        if (answer === true) {

            return
        }
        else {
            Kitten.countDocuments().then((count_documents) => {
                message.reply(`**${message.author} , Total Number Of Investement Recorded Are ${count_documents} **`)

            }).catch((err) => {

                console.log(err.Message)
            })

        }
    }
    catch (err) {

    }
}
module.exports = listed

