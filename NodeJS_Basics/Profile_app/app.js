'use strict';
//problem: we need a simple way to look at a user's badge count and JavaScript points.
//solution: use node.js to connect a treehouse's API to get profile information to print out

//require https module
const https = require('https');
// const username = "jasonearly";

//function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total number of badge(s) and ${points} points in JavaScript`;
console.log(message);
}

// printMessage("chalkers", 100, 10000);

function getProfile(username){

//connect to API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
let body = "";

  //read the data
  response.on('data', data => {
    body += data.toString();
  });

  response.on('end', () => {
    //parse data
    const profile = JSON.parse(body);
    printMessage(username, profile.badges.length, profile.points.JavaScript);

  });

});
}
const users = process.argv.slice(2);
users.forEach(getProfile);
