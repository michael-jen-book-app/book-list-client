const bookView = {};

(function(module)) {

  bookView.initIndexPage() =  {
    $('.container').hide();
    $('#book-view').show();
    Book.all.map(x => $('#booklist').append(x));
  }
    $('document').ready( => {
      Book.fetchAll(bookView.initIndexPage);
    });


}(bookView)
