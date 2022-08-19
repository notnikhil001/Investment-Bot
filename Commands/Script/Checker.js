const { MessageEmbed } = require('discord.js')

const checker = async (message, Config, emoji_dinied) => {
    try {
        const ids = Config.MANAGER_ID
        if (!ids.includes(message.author.id)) {
            let embed = new MessageEmbed()
                .setDescription(`${emoji_dinied} || **Access Denied !! **`)
                .setColor('RED')
                .setThumbnail("https://media.discordapp.net/attachments/996684454544285716/1000119518263250984/images.jpeg")
            message.reply({ embeds: [embed] })
            return true
        }
        return false
    }
    catch (err) {
        console.log(err)
    }
}







module.exports = checker
