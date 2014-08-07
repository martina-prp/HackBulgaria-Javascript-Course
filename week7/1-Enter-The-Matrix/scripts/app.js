/*require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery"
  }
});*/

require(['matrix', 'matrixoperation', 'matrixui'], function(Matrix, MatrixOperation) {
  console.log('Matrixoperation module loaded');
  var m = new Matrix(2, 2);
  var mo = new MatrixOperation();
  var created = mo.createFromArray([[1, 2], [3, 4]]);
  /*console.log(created.getMatrix());
  console.log(created.toString());
  var trM = mo.transpose(created);
  console.log(trM.toString());
  var add = mo.add(created, trM);
  console.log(add.toString());
  var smult = mo.scalarMult(2, created);
  console.log(smult.toString());*/
  //var col = created.getCol(0);
  //console.log(col);
  var m2 = mo.createFromArray([[2, 2, 2], [2, 2, 2]]);
  var mult = mo.multiply(created, m2);
  console.log(mult.toString());
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
  console.log(t);
  bower install q#1.0.1
cb = callback
  */
})
