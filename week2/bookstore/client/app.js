'use strict';

$(document).ready(function() {

  $.getJSON('http://localhost:3000/books', function(books) {
    var book_template = $('#single-book-template').html(),
      table = [],
      shoppingCartTable = [],
      shoppingCartBooks = [],
      bookCellClass = '';
    table = generateTable(books, book_template);
    $('.bookstore-table').append(table.join(''));

    $('.btn-success').click(function() {
      bookCellClass = $(this).closest('td').attr('class');
      shoppingCartBooks.push();

      shoppingCartTable = generateTable(shoppingCartBooks, book_template);
      $('#books-container').append(shoppingCartTable.join(''));
    });
  });

  var generateTable = function(books, book_template) {
    var res = [], table = [];
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

    return table;
  };

});
