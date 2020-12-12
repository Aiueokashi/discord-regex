# discord-regex
Discord bot and invite URL regex
```javascript
const inviteRegex = /(https?:\/\/)?(www\.|canary\.|ptb\.)?discord(\.gg|(app)?\.com\/invite|\.me)\/([^ ]+)\/?/gi;
const botInvRegex = /(https?:\/\/)?(www\.|canary\.|ptb\.)?discord(app)?\.com\/(api\/)?oauth2\/authorize\?([^ ]+)\/?/gi;
```
Usage:
```javascript
const Regex = require(./regex.js);
message.channel.send(Regex.stripInvites("some text includes invite code e.g. https://discord.gg/000000"));
//-> some text includes invite code e.g. ******
```
