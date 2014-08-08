require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
    "handlebars": "../bower_components/handlebars/handlebars"
  },
  shim: {
    "bootstrap": {
      "deps": ["jquery"]
    },
    "handlebars": {
      exports: "Handlebars"
    }
  }
});

require(["jquery", "bootstrap", "handlebars", "matrix"], function($, Handlebars, Matrix) {
  $(function() {
    var matrix = {};

    $('.create-matrix-ui').on('click', function(event) {
      event.preventDefault();
      var n = $('.matrix-rows').val();
      var m = $('.matrix-cols').val();
      console.log(n);
      console.log(m);
      matrix = new Matrix(n, m);
console.log(matrix.getMatrix());
      var matrixTemp = $('#matrix-template').html();
      console.log(matrixTemp);
      var template = Handlebars.compile(matrixTemp);
      var matrixHtml = template({rows: matrix.getMatrix()});
      $('.first-matrix').append(matrixHtml);
    })
  });
});
