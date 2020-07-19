module.exports = async (client, guild) => {
    const guildDocument = await client.database.guilds.findOne({ '_id': guild.id})

    if (guildDocument) {
        await client.database.guilds.deleteOne({ '_id': guild.id })
    }
}