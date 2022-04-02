function runProgram(input) {
  input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;
  for (var i = 0; i < t; i++) {
    var [r, c] = input[line++].trim().split(" ").map(Number);
    var matrix = [];
    for (var j = 0; j < r; j++) {
      var arr = input[line++].trim().split(" ").map(Number);
      matrix.push(arr);
    }
    spiralTraversal(matrix, r, c);
  }
}
function spiralTraversal(matrix, row, col) {
  var top = 0;
  var bottom = row - 1;
  var left = 0;
  var right = col - 1;
  var size = row * col;
  var count = 0;
  var spiral = [];
  while (count < size) {
    for (var i = top; i <= bottom; i++) {
      spiral.push(matrix[i][left]);
      count++;
    }
    left++;
    for (var j = left; j <= right; j++) {
      spiral.push(matrix[bottom][j]);
      count++;
    }
    bottom--;
    for (var k = bottom; k >= top; k--) {
      spiral.push(matrix[k][right]);
      count++;
    }
    right--;
    for (var l = right; l >= left; l--) {
      spiral.push(matrix[top][l]);
      count++;
    }
    top++;
  }
  console.log(spiral.join(" "));
}

if (process.env.USERNAME === "user") {
  runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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
