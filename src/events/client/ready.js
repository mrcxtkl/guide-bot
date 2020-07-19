const chalk = require('chalk')

module.exports = async (client) => {
    console.log(`[${chalk.green.bold('Discord')}] Conexão com a API efetuada sem erros!`)

    const presences = [
        {
            name: `Estou em ${client.guilds.size} servidores!`,
            type: 'SREAMING',
            url: 'https://twitch.tv/nasa'
        }, {
            name: `${process.env.PREFIX}help`,
            type: 'PLAYING'
        }
    ]

    setInterval(() => {
        const selected = presences[Math.floor(Math.random() * presences.length)]
        client.user.setPresence({ activity: selected })
    }, 5000)
}
