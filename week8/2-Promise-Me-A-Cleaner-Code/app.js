require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first() {
    var defer = Q.defer();

    setTimeout(function(n) {
        console.log('first');
        defer.resolve(2)
      }, 3000
    )

    return defer.promise;
  }

  function second(n) {
    var defer = Q.defer();

    setTimeout(function() {
      console.log(3*n);
      defer.resolve(3*n);
      }, 3000
    )

    return defer.promise;
  }

  function third() {
    console.log("I should do the job after first and second");
  }

  /*first(function() {
    console.log("called first!");
    second(function() {
      console.log("called second!");
      third();
    });
  });*/

  Q.fcall(first) // otiva naj otdolu v event loop
  //first() //izpylnqwa se vednaga
    .then(second)
    .then(third)
    .done();
});
