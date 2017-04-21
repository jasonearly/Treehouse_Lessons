'use strict';
//problem: we need a simple way to look at a user's badge count and JavaScript points.
//solution: use node.js to connect a treehouse's API to get profile information to print out

//require https module
const https = require('https');
//require http module for status codes
const http = require('http');
//Print Error messages
function printError(error){
  console.error(error.message);
}

//function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total number of badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

// printMessage("chalkers", 100, 10000);

function get(username){
  try{
    //connect to API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if (response.statusCode === 200){

      let body = "";

      //read the data
      response.on('data', data => {
        body += data.toString();
      });

      response.on('end', () => {
        try{
        //parse data
        const profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);
      } catch (error){
        printError(error);
      }

      });
} else {
  const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
  const statusCodeError = new Error(message);
  printError(statusCodeError);
}
    });

    request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}


module.exports.get = get;
