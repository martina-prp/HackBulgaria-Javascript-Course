define(['matrix'], function(Matrix) {
  function MatrixOperation(Matrix) {

    this.createFromArray = function(data) {
      var matrix = Matrix.getMatrix();
      data.forEach(function(row, key) {console.log(row);
        matrix.setRow(key, row);
      });
    }

    this.transpose = function() {
      var matrix = Matrix.getMatrix();
      var transposeMatrix = new Matrix(matrix.getM(), matrix.getN());
      matrix.forEach(function(row, key) {
        transposeMatrix.setCol(key, row);
      })

      return transposeMatrix;
    }
  }


  return MatrixOperation;
});
