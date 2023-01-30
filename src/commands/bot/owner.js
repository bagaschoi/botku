const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `BagasOraBagus`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `<@!796946355083673620>`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `BotKu`,
            inline: true,
        },
        {
            name: "🌐┆Server",
            value: `[https://discord.gg/Gs6nD7TWgA](https://discord.gg/Gs6nD7TWgA)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
