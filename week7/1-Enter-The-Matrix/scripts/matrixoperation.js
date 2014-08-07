define(['matrix'], function(Matrix) {
  function MatrixOperation() {

    this.createFromArray = function(data) {
      var matrix = new Matrix(0, 0);
      data.forEach(function(row, key) {
        matrix.setRow(key, row);
      });
      return matrix;
    }

    this.transpose = function(M) {
      var matrix = M.getMatrix();
      var transposeMatrix = new Matrix(M.getM(), M.getN());
      matrix.forEach(function(row, key) {
        transposeMatrix.setCol(key, row);
      })

      return transposeMatrix;
    }

    this.add = function(M1, M2) {
      var result = new Matrix(M1.getN(), M1.getM());
      var matrix1 = M1.getMatrix();
      var matrix2 = M2.getMatrix();
      for (var i = 0; i < M1.getN(); i++) {
        for (var j = 0; j < M1.getM(); j++) {
          var value = matrix1[i][j] + matrix2[i][j];
          result.setAt(i, j, value);
        }
      }
      return result;
    }

    this.scalarMult = function(scalar, M) {
      var result = new Matrix(M.getN(), M.getM());
      var matrix = M.getMatrix();
      matrix.forEach(function(row, key) {
        var newRow = [];
        row.forEach(function(element) {
          newRow.push(element * scalar);
        })
        result.setRow(key, newRow);
      });
      return result;
    }

    this.multiply = function(M1, M2) {
      var result = new Matrix(M1.getN(), M2.getM());
      for (var i = 0; i < M1.getN(); i ++) {
        m1Row = M1.getRow(i);
        for (var j = 0; j < M2.getM(); j++) {
          m2Col = M2.getCol(j);
          var sum = 0,
            list = [];
          m1Row.forEach(function(el, key) {
            list.push(el*m2Col[key]);
          });
          sum = list.reduce(function(a, b) {
            return a + b;
          });
          result.setAt(i, j, sum);
        }
      }
      return result;
    }
  }


  return MatrixOperation;
});
