let mongoXlsx = require('mongo-xlsx');
const checker = require('../Script/Checker')
let fs = require('fs');
//---------------------------------------------
const exportcsv = async (client, message, Kitten, Config) => {
    try {
        const emoji_dinied = client.emojis.cache.get(Config.Emoji.Wrong_Emoji_id)
        const answer = await checker(message, Config, emoji_dinied)
        if (answer === true) {
            return
        }
        else {
            Kitten.find({}, function (error, result) {
                let model = mongoXlsx.buildDynamicModel(result);
                mongoXlsx.mongoData2Xlsx(result, model, function (err, res) {
                    const attachment = res["path"] + res["fileName"]
                    message.channel.send({ files: [attachment] }, function (err, res) {
                        fs.unlink(`${attachment}`, (err) => {

                        })
                    })
                })
            })
        }
    }
    catch (err) {

    }
}
module.exports = exportcsv
