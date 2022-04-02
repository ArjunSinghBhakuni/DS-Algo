function runProgram(input) {
  input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;
  var arr = [];
  for (var i = 0; i < t; i++) {
    var r = input[line++].trim().split(" ").map(Number);
    arr.push(r);
  }
  boundaryAndDiagonalAddition(arr, t);
}
function boundaryAndDiagonalAddition(matrix, t) {
  var top = 0;
  var bottom = t - 1;
  var left = 0;
  var right = t - 1;
  var spiral = [];
  for (var i = top; i <= bottom; i++) {
    spiral.push(matrix[i][left]);
  }
  left++;
  for (var j = left; j <= right; j++) {
    spiral.push(matrix[bottom][j]);
  }
  bottom--;
  for (var k = bottom; k >= top; k--) {
    spiral.push(matrix[k][right]);
  }
  right--;
  for (var l = right; l >= left; l--) {
    spiral.push(matrix[top][l]);
  }
  top++;
  for (var m = top; m <= bottom; m++) {
    for (var p = left; p <= right; p++) {
      if (m == p || m + p == t - 1) {
        spiral.push(matrix[m][p]);
      }
    }
  }
  var sum = 0;
  for (var i = 0; i < spiral.length; i++) {
    sum += spiral[i];
  }
  console.log(sum);
}

if (process.env.USERNAME === "user") {
  runProgram(`5
  1 2 3 4 5
  6 7 8 9 1
  2 3 4 5 6
  7 8 9 1 2
  3 4 5 6 7`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/);
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
