const ping = async (client, message) => {
    try {
        message.channel.send(`${message.author} **, Pong!! ◉ API Latency => ${client.ws.ping} ms**`)
    }
    catch (err) {

    }
}


module.exports = ping
