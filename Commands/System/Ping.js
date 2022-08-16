const ping = async (client, message) => {
    message.channel.send(`${message.author} **, Pong!! ◉ API Latency => ${client.ws.ping} ms**`)
}


module.exports = ping
