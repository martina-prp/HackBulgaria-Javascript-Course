define(function() {
  function Matrix(n, m) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < m; j++) {
        row.push(1);
      }
      matrix.push(row);
    }

    this.getN = function() {
      return n;
    }

    this.getM = function() {
      return m;
    }

    this.getMatrix = function() {
      return matrix;
    }

    this.getRow = function(index) {
      if (matrix.length !== 0) {
        return matrix[index];
      }
      else {
        return 'The matrix is empty';
      }
    }

    this.getCol = function(index) {
    var result = [];
      if (matrix.length !== 0) {
        matrix.forEach(function(element) {
          element.forEach(function(el, key) {
            if (index === key) {
              result.push(el);
            }
          });
        });
        return result;
      }
      else {
        return 'The matrix is empty';
      }
    }

    this.setRow = function(index, row) {
      if (index > n && (index - 1) === n) {
        matrix.push(row);
        n++;
      }
      else {
        matrix[index] = row;
        n = matrix.length;
        m = row.length;
      }
    }

    this.setCol = function(index, col) {
      var colL = 0;
      if (matrix.length === 0 && index === 0) {
        col.forEach(function(element) {
          var el = [];
          el.push(element);
          matrix.push(el);
        });
      }

      if (index > m && (index - 1) === m) {
        matrix.forEach(function(element) {
          element.push(col[colL]);
          colL++;
          m++;
        });
      }
      else {
        matrix.forEach(function(element) {
          element[index] = col[colL];
          colL++;
        })
      }
    }

    this.getAt = function(i, j) {
      return matrix[i][j];
    }

    this.setAt = function(i, j, value) {
      if (i <= n && j <= m) {
        matrix[i][j] = value;
      }
    }
  }

  Matrix.prototype.toString = function() {
    var data = this.getMatrix(), res = [];
    data.forEach(function(element) {
      res.push('( ' + element.join(' ') + ' )');
    });
    return res.join('\n');
  }

  return Matrix;
});
