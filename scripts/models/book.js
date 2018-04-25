'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://dashboard.heroku.com/apps/ms-jb-booklist';
ENV.developmentApiUrl = 'http://localhost:3000';

ENV.apiUrl = 
if (ENV.isProduction){
    ENV.apiUrl = ENV.productionApiUrl;
} else{
    ENV.apiUrl = ENV.developmentApiUrl;
}