const inviteRegex = /(https?:\/\/)?(www\.|canary\.|ptb\.)?discord(\.gg|(app)?\.com\/invite|\.me)\/([^ ]+)\/?/gi;
const botInvRegex = /(https?:\/\/)?(www\.|canary\.|ptb\.)?discord(app)?\.com\/(api\/)?oauth2\/authorize\?([^ ]+)\/?/gi;

module.exports = class Regex {
	static stripInvites(str, { guild = true, bot = true, text = '******' } = {}) {
		if (guild) str = str.replace(inviteRegex, text);
		if (bot) str = str.replace(botInvRegex, text);
		return str;
	}
	
	static invites (str) {
	if inviteRegex.includes(str);{
		return true;
	}
	if botInvRegex.includes(str);{
		return true;
	}
	return false;
	}
}
