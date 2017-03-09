var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1489050450;
var currentMoment = moment.unix(timestamp).format('dddd, MMM Do YYYY @ h:mm a');
console.log(currentMoment);

console.log(moment.unix(timestamp).format('MMMM Do, YYYY @ h:mm A'));
