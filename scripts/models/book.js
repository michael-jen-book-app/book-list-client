'use strict';

//this variable is assigns app to either to the existing version of itself or a blank object
var app = app || {};
const ENV = {};

//these four properties of the ENV object dictate which API URL will be used by our server.js file based on whether or not we are using the https protocol, which would be provided in the event we were using heroku and thus using the production API URL
ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://dashboard.heroku.com/apps/ms-jb-booklist';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl ! ENV.developmentApiUrl;

  //the IIFE for our page initialization
  (function(module) {

    //this function console.errors any errors detected and assigns this method to our app object which saves us time by not having to type what is executed each time we want to check for errors
    function errorCallback(err) {
      console.err(err);
      module.errorView.initErrorPage(err);
    }

    //this is the constructor function for each book object from our database
    function Book(jsonBookObj) {
      //this statement uses the .keys method of the Object prototype to assign specific keys of our instance to the keys parsed from the json file, for however many keys are in the json object.
      Object.keys(jsonBookObj).forEach(key => this.[key] = jsonBookObj.[key]);
    }

    //this declaration assigns a method to each instance of our Book constructor that will compile the contents of that instance into our Handlebars template on the index.html
    Book.prototype.toHtml = function() {
        let template = Handlebars.compile($(`#book-list-template`).text());
        return template(this);
    }
    //this attaches a blank array to our Book constructor
    Book.all = [];

    //this .loadAll method on the Book constructor returns our Book.All array populated with sorted-by-title instances of said constructor
    Book.loadAll = rows => Book.all = rows.sort(a,b) => (b.title - a.title).map(book +. new Book(book));

    //this method on the constructor listens for when /api/vi/books is requested in the browser (using the correct URL for whether or not we are using the local or cloud database) and then calls the .loadAll method
    Book.fetchAll = callBack =>
      $(`${ENV.apiUrl}/api/vi/books`)
      .then(Book.loadAll)
      .then(callBack)
      .catch(errorCallback);

    //this final statement assigns the Book constructor as a method of our app object (the parameter for our IIFE)
    module.Book = Book;
    console.log('book.js IIFE called');
  } ) (app)
