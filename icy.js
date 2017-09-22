let fs = require('fs')

/**
 * Write ICS to a file in the current directory called event.ics
 * @param {Date} start - Starting time of the event.
 * @param {Date} end - Ending time of the event.
 * @param {String} title - Title of the event.
 * @param {String} location - Location of the event.
 */
function makeICS(start, end, title="", location="") {
	fs.writeFile(__dirname + "/event.ics", makeString(startDate, endDate, title, location), function(err) {
    if (err) {
        return console.log(err)
    }
	}); 
}

/**
 * Output ICS as a string
 * @param {Date} start - Starting time of the event.
 * @param {Date} end - Ending time of the event.
 * @param {String} title - Title of the event.
 * @param {String} location - Location of the event.
 * @returns {String} String representation of the ICS event
 */
function makeString(start, end, title="", location="") {
	return 'BEGIN:VCALENDAR\n' +
					'VERSION:2.0\n' +
					'PRODID:-//hacksw/handcal//NONSGML v1.0//EN\n' +
					'BEGIN:VEVENT\n' +
					`UID:${generateUID()}\n` +
					`DTSTAMP:${toDateTime(new Date())}\n` +
					`DTSTART:${toDateTime(start)}\n` +
					`DTEND:${toDateTime(end)}\n` +
					`SUMMARY:${title}\n` +
					`LOCATION:${location}\n` +
					'END:VEVENT\n' +
					'END:VCALENDAR'
}

// JS Date Format -> ICS Date Format
function toDateTime(date) {
	const isoString = date.toISOString()
	const formattedString = isoString.replace(/[-:.]/g,'')
	return formattedString.substring(0, formattedString.length - 4) + 'Z'
}

// Not important unless sequencing events
function generateUID() {
	const randomInt = Math.floor(1000 + Math.random() * 9000)
	return 'uid' + randomInt + '@charliepeters.me'
}

module.exports = {
	makeICS : makeICS,
	makeString : makeString
}