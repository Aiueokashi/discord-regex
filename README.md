# discord-regex
### Discord bot and invite URL regex
```javascript
const inviteRegex = /(https?:\/\/)?(www\.|canary\.|ptb\.)?discord(\.gg|(app)?\.com\/invite|\.me)\/([^ ]+)\/?/gi;
const botInvRegex = /(https?:\/\/)?(www\.|canary\.|ptb\.)?discord(app)?\.com\/(api\/)?oauth2\/authorize\?([^ ]+)\/?/gi;
```
### 1.Download regex.js file and put on your "/root" directory<br>
### 2.Put your codes...
#### Usage for client message:
```javascript
const Regex = require(./regex.js);
message.channel.send(Regex.stripInvites("some text includes invite code e.g. https://discord.gg/000000"));
//-> some text includes invite code e.g. ******
```
#### Usage delete invite message from user or bot:
```javascript
const { invites } = require(./regex.js);
const AllowUser = [  // they can send invite code anywhere - ①
"userID",
"userID"
]

const AllowChannel = [ // everyone can send invite code in these channel - ②
"channelID",
"channelID"
]

client.on('message', async message => {
  if(!AllowUser.includes(message.author)){ //①
    if(!AllowChannel.includes(message.channel)){     //②
        if(invites.includes(message.content)){ 
        let msg = await message.channel.send("[Do not send invite link this channel]");
        //msg.delete({timeout:5000}) // delete ↑this message after 5 sec
        return message.delete({timeout:500});//delete invite message 0.5 sec
        };
      }
    }
})
```
