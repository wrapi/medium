'use strict';

var wrapi = require('wrapi');

function mediumWrapi(apiVersion, accessToken) {
  if (arguments.length <= 1) {
    accessToken = apiVersion;
    apiVersion = 'v1';
  }

  var endpoints = require('./api/' + apiVersion + '/medium.json');

  var opts = {
    headers: {
      "Authorization": "Bearer " + accessToken,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": 'medium-wrapi'
    }
  };

  wrapi.call(this,
    'https://api.medium.com/' + apiVersion + '/',
    endpoints,
    opts
  );  
};

mediumWrapi.prototype = Object.create(wrapi.prototype);
mediumWrapi.prototype.constructor = mediumWrapi;

module.exports = mediumWrapi;
