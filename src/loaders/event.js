const { readdirSync } = require("fs")

module.exports = client => {
  const eventFolder = readdirSync('./src/events')
  
  for (dir of eventFolder) {
    const folderFiles = readdirSync(`./src/events/${dir}/`).filter(d => d.endsWith('.js'));

    for (file of folderFiles) {
      const eventFile = require(`../events/${dir}/${file}`);
      const eventName = file.split('.js')[0];
      client.on(eventName, eventFile.bind(null, client));
    };
  };
}