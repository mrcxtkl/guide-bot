module.exports = {
    help: {
        name: 'ping',
        aliases: ['pong'],
        description: 'Mostra a latência entre o bot e a API.',
        category: 'utilidade',
        usage: ''
    },
    run: ({ message }) => message.channel.send('Pong!')
}