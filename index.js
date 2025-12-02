const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log(`Bot aktif: ${client.user.tag}`);
});

client.on("messageCreate", msg => {
    if (!msg.content.startsWith("/mesaj")) return;

    const yazi = msg.content.slice(7).trim();
    if (!yazi) return msg.reply("Lütfen bir mesaj yaz.");

    // 10 kere spamlar
    for (let i = 0; i < 10; i++) {
        msg.channel.send(yazi);
    }
});

client.login(process.env.TOKEN);
