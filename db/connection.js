// sets the sb connection?

const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/fifteen-beats';
const db = monk(connectionString);

module.exports = db;
