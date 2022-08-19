const { MessageEmbed } = require('discord.js')
//-------------------------------------------------------
const suprole = async (client, message, args, Config) => {
    try {
        const emoji_dinied = client.emojis.cache.get(Config.Emoji.Wrong_Emoji_id)
        const emoji_check = client.emojis.cache.get(Config.Emoji.Check_Emoji_id)
        if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send('You Do Not Have Permission To Use This Command !')
        role = message.guild.roles.cache.find(r => r.id === Config.Role.SUPPORTER_ROLE)
        member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (message.guild.id == Config.GUILD_ID) {
            try {
                if (!member.roles.cache.has(Config.Role.SUPPORTER_ROLE)) {
                    member.roles.add(role)
                    const embed_0 = new MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(`**${emoji_check}||<@&${Config.Role.SUPPORTER_ROLE}> Has Been Added To ${member}**`)
                    message.channel.send({ embeds: [embed_0] })
                }
                else {
                    member.roles.remove(role)
                    const embed = new MessageEmbed()
                        .setColor('RED')
                        .setDescription(`**${emoji_dinied}||<@&${Config.Role.SUPPORTER_ROLE}> Has Been Removed From ${member}**`)
                    message.channel.send({ embeds: [embed] })
                }
            }
            catch (err) { }
        }
        else {
            message.reply(`**Command Can Not Be Use Here**`)
        }
    }
    catch (err) {

    }
}
//-------------------------------------------------------
module.exports = suprole