'use strict';

$(document).ready(function() {

  $.getJSON('http://localhost:3000/books', function(books) {
    var res = [],
      book_template = $('#single-book-template').html(),
      table = [];
    res = books.map(function(book, index) {
      var cell  = '';
      if (index % 3 === 0) {
        cell = '</tr>' + _.template(book_template, book);
      }
      else {
        cell =  _.template(book_template, book);
      }
      return cell;
    });
    table = [
      '<table>',
      res.join(''),
      '</table>'
    ];
    $('.bookstore-table').append(table.join(''));
  });
});
