const { Client} = require("discord.js")
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_INTEGRATIONS"]
})
var term = require('terminal-kit').terminal;

client.on("ready", ()=>{
    term.blue(`${client.user.username} sohbete katıl bir şeyler yaz...\n`)
    term.inputField(
        function (error, input) {

            const channel = client.channels.cache.find(ch => ch.id === '980198374974320643')
            channel.send(`ilkmesaj12121212 ${input}`)
            term.blue(`\n${client.user.username}#${client.user.discriminator} : ${input}\n`)
            term.inputField(
                function (error, input) {
        
                    const channel = client.channels.cache.find(ch => ch.id === '980198374974320643')
                    channel.send(`${input}`)

                }
            );
        }
    );
})

client.on("messageCreate", message =>{
    const kontrol = message.content.split("12121212")[0]
    if(kontrol === "ilkmesaj")return;
    if (message.author.id === client.user.id) {
        term.blue(`\n${client.user.username}#${client.user.discriminator} : ${message.content}\n`)
        term.inputField(
            function (error, input) {
                const channel = client.channels.cache.find(ch => ch.id === '980198374974320643')
                channel.send(`${input}`)
            }
        );
    } else {
        term.green(`=>${message.author.username}#${message.author.discriminator} : ${message.content}\n`)
        term.inputField(
            function (error, input) {
    
                const channel = client.channels.cache.find(ch => ch.id === '980198374974320643')
                channel.send(`${input}`)
            }
        );
    }

})



client.login("")



