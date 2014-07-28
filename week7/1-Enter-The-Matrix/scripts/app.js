require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery"
  }
});

require(['matrix', 'matrixoperation'], function(Matrix, MatrixOperation) {
  console.log('Matrixoperation module loaded');
  var m = new Matrix(2, 2);
  var mo = new MatrixOperation(m);
  var created = mo.createFromArray([[1, 2], [3, 4]]);
  console.log(m.getMatrix());
  console.log(m.toString());
  //var trM = mo.transpose();
  //console.log(trM);
  /*m.setRow(1, [1, 2]);
  m.setRow(2, [3, 4]);
  console.log(m.getRow(1));
  console.log(m.getRow(2));
  m.setCol(3, [5, 5]);
  console.log(m.getMatrix());
  m.setCol(1, [2, 2]);
  console.log(m.getMatrix());
  console.log(m.getAt(1, 1));
  m.setAt(0, 0, 7);
  console.log(m.getMatrix());
  var t = m.toString();
  console.log(t);*/
})
