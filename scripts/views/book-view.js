'use strict';

var app = app || {};

(function(module) {
  const bookView = {};
  bookView.initIndexPage = () {
    $('.container').hide();
    $('#book-view').show();
    app.Book.all.map(x => $('#book-list').append(x));
  }
    module.bookView = bookView;
}(app));

$('document').ready( => {
  console.log('testo');
  app.Book.fetchAll(app.bookView.initIndexPage);
});
