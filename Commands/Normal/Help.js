const { MessageEmbed } = require('discord.js')


const help = async (client, message, Config) => {
    const normal = client.emojis.cache.get('1007958661131419648')
    const admin = client.emojis.cache.get('1007958611693142016')
    const del = client.emojis.cache.get('996641101266030593')
    const payment = client.emojis.cache.get('1007963594765369354')
    const dance = client.emojis.cache.get('1007969431298773063')
    const xcel = client.emojis.cache.get('1007968493175582760')
    const list = client.emojis.cache.get('1007969025793466449')
    const embed = new MessageEmbed()
        .setColor('BLUE')
        .setAuthor({ name: `${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
        .addFields(
            {
                name: `\u200B\n`,
                value: `**• Prefix for this server is** ${Config.Bot.PREFIX} \n**• Type **` + '`help<command | module>` **for more info.**\n' + `**• [Join My Server](https://discord.gg/tirth) | [Add Me](https://discord.com/api/oauth2/authorize?client_id=982251878056345641&permissions=8&scope=bot) | [Dm My Owner](https://discordapp.com/users/792675560056422410)**`
            },
            { name: `\u200B \n__Main__`, value: '**💰 • Me\n🏓️• Ping\n⏳ • Uptime \n' + `${payment} • Pm**`, inline: true },
            { name: `\u200B \n__Admin__`, value: `${normal}** • Add \n ${del} • Delete \n ${dance} • Paid \n ${admin} • User \n ${xcel} • Export\n ${list} • Listed\n**`, inline: true }
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/975724783385849978/982285795257905212/Screenshot_2022-06-03-19-42-20-98_572064f74bd5f9fa804b05334aa4f912.jpg')
        .setTimestamp()
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL({ dynamic: true }) })

    message.channel.send({ embeds: [embed] })

}


module.exports = help