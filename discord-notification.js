require('dotenv').config();
const DiscordNotification = require('@penseapp/discord-notification');

const discordNotification = new DiscordNotification.DiscordNotification('MobileUI', process.env.DISCORD_WEBHOOK);

function getCurrentTimestamp() {
	const options = {
		timeZone: 'Asia/Jakarta',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	};
	
	const formatter = new Intl.DateTimeFormat('en-ID', options);
	const formattedTimestamp = formatter.format(new Date());
	
	return formattedTimestamp;
} 

function test(state) {
	if (state == 'start') {
		discordNotification
			.infoMessage()
			.addTitle('Testing Start')
			.addDescription(`from ${process.env.REPOSITORY_URL}`)
			.addField({name: 'Branch', value: process.env.BRANCH, inline: false }) //breakline
			.addField({name: 'Build URL', value: process.env.BUILD_URL, inline: false })
			.addField({name: 'Build Number', value: `android.v.1.${process.env.BUILD}` }) 
			.addFooter(`Test start on ${getCurrentTimestamp()}`)
			.sendMessage();
	} else if (state == 'stop') {
		discordNotification
			.infoMessage()
			.addTitle('Testing Complete')
			.addDescription(`from ${process.env.REPOSITORY_URL}`)
			.addField({name: 'Branch', value: process.env.BRANCH, inline: false }) //breakline
			.addField({name: 'Build URL', value: process.env.BUILD_URL, inline: false })
			.addField({name: 'Build Number', value: `android.v.1.${process.env.BUILD}` }) 
			.addFooter(`Test is completed on ${getCurrentTimestamp()}`)
			.sendMessage();
	} else {
		// eslint-disable-next-line no-console
		console.error('Invalid Parameter');
	}
}

module.exports = { test };