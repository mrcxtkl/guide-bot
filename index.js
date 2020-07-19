const { readdirSync } = require('fs')
require('dotenv/config')

const { Client } = require('discord.js')
const client = new Client({ fetchAllMembers: true })

readdirSync('./src/loaders').forEach(l => require(`./src/loaders/${l}`)(client))

client.login(process.env.CLIENT_TOKEN)