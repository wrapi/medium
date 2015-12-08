'use strict';

var util = require('util');
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

  mediumWrapi.super_.call(this,
    'https://api.medium.com/' + apiVersion + '/',
    endpoints,
    opts
  );  
};

util.inherits(mediumWrapi, wrapi);

module.exports = mediumWrapi;
