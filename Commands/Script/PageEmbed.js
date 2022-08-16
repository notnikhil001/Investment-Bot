const { MessageEmbed } = require('discord.js')

const pagecreator = function creator(result, no, to) {
    const difftohour = Math.ceil((new Date(result.ReturnDate).getTime() - new Date(Date.now()).getTime()) / (1000 * 24 * 3600))
    const embed = new MessageEmbed()
        .setColor('PURPLE')
        .setTitle('📅ㅤ__Investment Information__ !')
        .setDescription('>>> ' + '----------------------------------------' + '\n' + `**Invested By : <@${result.User}>**` + '\n' + `**User-Id :**` + '`' + result.User + '`' + '\n' + `**Status :**` + '`' + result.Status + '`' + '\n' + '----------------------------------------')
        .addFields(
            { name: '🎁' + 'ㅤ' + '__Investment Information__ :', value: '>>> ' + `**Invested Date :**` + '`' + result.Investeddate + '`' + '\n' + `**Invested Amount :**` + '`' + `${result.InvestedAmount} ${result.Currency}` + '`' + '\n' + '----------------------------------------' },
            { name: '💳' + 'ㅤ' + '__Return Info__  :', value: '>>> ' + `**Return Date :**` + '`' + `${result.ReturnDate}` + '`' + "\n" + `**Return Amount :**` + '`' + `${result.ReturnAmount} ${result.Currency}` + '`' + '\n' + `**Remaining Days :**` + '`' + `${difftohour}` + '`' + '\n' + '----------------------------------------' },
        )
        .setTimestamp()
        .setFooter({
            text: `Id : ${result.Authid} • Page : ${no}/${to}`
        })
    return embed
}



module.exports = pagecreator
