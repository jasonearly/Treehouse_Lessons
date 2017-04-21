'use strict';
//problem: we need a simple way to look at a user's badge count and JavaScript points.
//solution: use node.js to connect a treehouse's API to get profile information to print out

const profile = require('./profile.js');

const users = process.argv.slice(2);
users.forEach(profile.get);
