var os = require('os');

var message = 'Here is some info about your system';

var sysArray = new Array(
	'Type: ' + os.type(),
	'Node Version: ' + process.version,
	'Platform: ' + os.platform(),
	'Host Name: ' + os.hostname(),
	'Total Memory: ' + os.totalmem(),
	'Free Memory: ' + os.freemem(),
	'CPU Uptime: ' + os.uptime());

console.log(message);

var arrayLen = sysArray.length;
i=0;
while (i < arrayLen) {
	console.log(sysArray[i]);
	i++;
}