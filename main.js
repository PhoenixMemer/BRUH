const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'aw ';


client.once('ready', () => {
    console.log('Aww Man is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'simp'){
        message.channel.send('**If I simp then no girl will be left alive, my power of love is too strong Im afraid!**');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UC1sELGmy5jp5fQUugmuYlXQ')
    } else if (command == 'twitter'){
        message.channel.send('https://twitter.com/Minecraft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')
    } else if (command == 'instagram'){
        message.channel.send('https://www.instagram.com/minecraft/?hl=en')
    } else if (command == 'explode-kaxmi'){
        message.channel.send('**A creeper doesnt explode on other creepers!** *sth is a creeper thats why*')
    } else if  (command == 'explode-killer'){
        message.channel.send('**Kilersetecie was exploded and his ashes were eaten by a skeleton!**')
    } else if (command == 'explode-fee'){
        message.channel.send('**Phinite simped on fee so hard that she exploded!**')
    }else if (command == 'explode-strofan'){
        message.channel.send('**A creeper exploded the renai disc and stroman died cuz of that!**')
    } else if (command == 'explode-blaze'){
        message.channel.send('**Blaze was exploded by a creeper,but in the nether.....?**')
    } else if(command == 'explode-tma'){
        message.channel.send('**TMA died cuz KaxmiKing exploded infront of him!**')
    } else if(command == 'explode-smark'){
        message.channel.send('**A creeper wanted to blow up Smarkazmi but couldnt cuz smark  was offline ;-;**')
    } else if(command == 'explode-phinite'){
        message.channel.send('**Fee exploded phinite"s heart by rejecting him ;-;**')
    } else if(command == 'explode-bee'){
        message.channel.send('**A creeper blew OfficialTheBeeMaster and all the honey leaked!**')
    } else if(command == 'mine'){
        message.channel.send('')
    }

});


client.login('ODYwNTM4ODcwMjM2MTg0NTg2.YN8tRg.LlqnsA2EJMhNpbjqicMO-PyVuTg');
