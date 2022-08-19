const os = require('os');
//-------------------------------------------------------
const uptime = async (client, message, args, config) => {
    try {
        var ut_sec = os.uptime();
        var ut_min = ut_sec / 60;
        var ut_hour = ut_min / 60;

        ut_sec = Math.floor(ut_sec)
        ut_min = Math.floor(ut_min)
        ut_hour = Math.floor(ut_hour)

        ut_hour = ut_hour % 60
        ut_min = ut_min % 60
        ut_sec = ut_sec % 60
        const to_send = "**I Am Running From :**" + '`' + `${ut_hour}  Hour(s) ${ut_min} minute(s) ${ut_sec}  second(s)` + '`'
        message.reply(to_send)
    }
    catch (err) {

    }
}
//-------------------------------------------------------
module.exports = uptime
