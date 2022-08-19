const { MessageEmbed } = require('discord.js')
const checker = require('../Script/Checker.js')
//-------------------------------------------------------
const add = async (client, message, args, Config, Kitten) => {
    try {
        const emoji_dinied = client.emojis.cache.get(Config.Emoji.Wrong_Emoji_id)
        const answer = await checker(message, Config, emoji_dinied)

        if (answer === true) {
            return
        }
        else {
            if (!args[4]) {
                message.channel.send("** Example : `!!add <amount> <currency> <days> <returntimes> <@user>`**")
                return
            }
            if (!args[0]) {
                message.channel.send('**Please Provide The Amount Of Investment !**')

                return
            }
            if (!args[1]) {
                message.channel.send('**Please Provide The Investment Currency !**')
                return
            }
            if (!args[2]) {
                message.channel.send('**Please Provide The Investment Days !**')
                return
            }
            if (!args[3]) {
                message.channel.send('**Please Provide The Investment Rates !**')
                return
            }
            if (!message.mentions.users.first()) {
                message.channel.send('**Please Mention The User !**')
                return
            }

            const user = message.mentions.users.first()
            const amount = args[0]
            const currency = args[1]
            const days = args[2]
            const interest = args[3]
            const ReturnDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
            const ReturnDateString = ReturnDate.toDateString()
            var today = new Date()
            var todaydate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
            const authid = Math.floor(Math.random() * 1000000000000)
            const myobj = new Kitten({ Authid: authid, User: user.id, Status: 'Not Paid', Investeddate: todaydate, InvestedAmount: amount, Currency: currency, InvestedDays: days, interest: interest, ReturnDate: ReturnDateString, Paiddate: null, ReturnAmount: amount * interest })
            myobj.save().then(() => {
                const embed = new MessageEmbed()
                    .setColor('PURPLE')
                    .setTitle('📠ㅤ__Investor Info__ :')
                    .setDescription('>>> ' + '--------------------------------------' + '\n' + `**User : ${user}**` + "\n" + `**User Id : **` + '`' + `${user.id}` + '`' + "\n" + `**User Tag :**` + '`' + `${user.tag}` + '`' + '\n' + '--------------------------------------')
                    .addFields(
                        { name: '🎁' + 'ㅤ' + '__Investment Information__ :', value: '>>> ' + `**Invested Date :ㅤ**` + '`' + todaydate + '`' + '\n' + `**Invested Amount :** ${amount} ${currency}` + "\n" + `**Days : ${days}**` + "\n" + "----------------------------------------" },
                        { name: '💳' + 'ㅤ' + '__Return Info__  :', value: '>>> ' + `**Return Date :ㅤ**` + '`' + `${ReturnDateString}` + '`' + "\n" + `**Return Amount :ㅤ**` + `${amount * interest} ${currency}` },
                    )
                    .setTimestamp()
                    .setFooter(`Id : ${authid}`)
                message.reply({ embeds: [embed] })
            })


        }
    }
    catch (err) {

    }
}

module.exports = add
