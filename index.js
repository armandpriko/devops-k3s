const uuid = require('uuid');
const moment = require('moment');

// Generate a random string on startup
const randomString = uuid.v4();

// Log the string with timestamp every 5 seconds
setInterval(() => {
    const timestamp = moment().toISOString();
    console.log(`${timestamp}: ${randomString}`);
}, 5000);
