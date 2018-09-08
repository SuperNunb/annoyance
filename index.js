const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login(process.env.token);

bot.once("ready", () => {
    console.log("PREPARE TO GET ANNOYED!");
    bot.user.setStatus('dnd');
    bot.user.setGame("The Annoying Game | Say annoy help");
});

bot.on("error", err => {
    if (err.message.startsWith("read ECONNRESET")) {
        console.log(ECONNRESET);
    }
    else console.log(err);
});

let annoySwitch = false;
bot.on("message", message => {
    if (message.content.startsWith("annoy help") || (message.content.includes("<@467677680251305984>") && message.author.id != "467677680251305984") || message.content.startsWith("help annoy")) {
        message.channel.send(`Hi, I'm ${bot.user}. I'm a simple little bot that will repeat users whenever they send a message. However, anyone with administrator permissions can turn my annoyance function on and off by saying "annoy on" and "annoy off", respectively. `, `You can get me to say this again by saying "annoy help" or by mentioning me.`);
    }
    else if (message.content.startsWith("annoy on") && message.member.hasPermission("ADMINISTRATOR") && annoySwitch == false) {
        annoySwitch = true;
        message.channel.send(`Awake and ready to annoy, ${message.author}!`);
        bot.user.setStatus('online');
    } else if (message.content.startsWith("annoy off") && annoySwitch == true) {
        annoySwitch = false;
        message.channel.send(`Good bye, and good night!`);
        bot.user.setStatus('dnd');
    } else if (annoySwitch == true && message.author.id != "467677680251305984" && message.attachments.size <= 0) {
        message.channel.send(message.content);
    } else if (message.content.startsWith("annoy") && (message.mentions.members.array()[0] != null || message.mentions.roles.array()[0] != null || message.mentions.users.array()[0] != null || message.mentions.everyone.array()[0] != null)) {
         if (message.member.hasPermission("MENTION_EVERYONE")) {
             if (message.mentions.roles.array()[0] != null) {
                 message.channel.send(`You can only annoy users, ${message.author}.`);
                 return;
             } else {
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
                 message.channel.send(`Hey ${message.mentions.members.first()}`);
             }
         } else message.channel.send(`Sorry, ${message.author}. You aren't allowed to annoy users unless you can use the everyone tag.`);
    }
});
