const { Collection } = require('discord.js')
const { readdirSync } = require("fs")

module.exports = (client) => {
  const commandFolder = readdirSync('./src/commands')
  client.commands = new Collection()

  for (dir of commandFolder) {
    const folderFiles = readdirSync(`./src/commands/${dir}/`).filter(f => f.endsWith('.js'));

    for (file of folderFiles) {
      const pull = require(`../commands/${dir}/${file}`);
      client.commands.set(pull.config.name, pull);
    }
  }
}