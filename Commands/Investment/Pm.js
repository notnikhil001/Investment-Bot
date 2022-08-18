const { MessageEmbed } = require('discord.js')
//-------------------------------------------------------
const pm = async (client, message , Config) => {
    const btc = client.emojis.cache.get(Config.EMOJI_ID.BTC)
    const eth = client.emojis.cache.get(Config.EMOJI_ID.ETH)
    const ltc = client.emojis.cache.get(Config.EMOJI_ID.LTC)
    const sol = client.emojis.cache.get(Config.EMOJI_ID.SOL)
    const usdt = client.emojis.cache.get(Config.EMOJI_ID.USDT)
    const binance = client.emojis.cache.get(Config.EMOJI_ID.BINANCE)
    const upi = client.emojis.cache.get(Config.EMOJI_ID.UPI)
    const embed = new MessageEmbed()
        .setTitle('Investment Payment Id -')
        .addFields(
            { name: 'BTC', value: `${btc}﹕**1LzrhoXtfswH1fzfQAN9jQjQmorXi8xjR4**` },
            { name: 'ETH', value: `${eth}﹕**0x0e706b35076de9cd83b5f142719cc013a87a569f**` },
            { name: 'LTC', value: `${ltc}﹕**Lgk8L6FjDWCQvi2zFm7k6bkte56YmH2McA**` },
            { name: 'SOL', value: `${sol}﹕**3o98BfzzpT22rf4oZ7HY4euzbF6RZM1ZtY8Dsvte2bni**` },
            { name: 'USDT TRC', value: `${usdt}﹕**TVrgb33KQvhXuCgXLZQPFeqXSPTToKqydt**` },
            { name: 'BINANCE MAIL', value: `${binance}﹕**tirthbtc69@gmail.com**` },
            { name: 'UPI ID', value: `${upi}﹕**jayqt@ibl**` }
        )
        .setColor('GREEN')
    message.channel.send({ embeds: [embed] })

}


module.exports = pm
