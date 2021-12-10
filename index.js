const Discord = require('discord.js')
const smogon = new Discord.Client()
const google = require ('./google')

smogon.on('ready', function() {
    smogon.user.setActivity('Rick')

})

smogon.on('message', function (message) {
    if (google.match(message)) {
        google.action(message)
        }
})

smogon.login(process.env.TOKEN)
