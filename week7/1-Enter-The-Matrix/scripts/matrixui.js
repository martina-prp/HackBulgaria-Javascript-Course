require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap"
  },
  shim: {
    "bootstrap": {
      "deps": ["jquery"]
    }
  }
});

require(["jquery", "bootstrap"], function($) {
  $(function() {
    $('.create-matrix-ui').on('click', function(event) {
      event.preventDefault();
      var n = $('.matrix-rows').val();
      var m = $('.matrix-cols').val();
      console.log(n);
      console.log(m);
    })
  });
});
