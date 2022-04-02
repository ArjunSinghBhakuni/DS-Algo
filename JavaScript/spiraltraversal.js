function runProgram(input) {
  input = input.trim().split("\n");
  var size = +input[0];
  var line = 1;
  var matrix = [];
  for (var i = 0; i < size; i++) {
    matrix.push(input[line++].trim().split(" ").map(Number));
  }
  spiralTraversal(matrix, size);
}

function spiralTraversal(matrix, size) {
  var top = 0;
  var bottom = size - 1;
  var left = 0;
  var right = size - 1;
  var size = size * size;
  var count = 0;
  var spiral = [];
  while (count < size) {
    for (var i = left; i <= right; i++) {
      spiral.push(matrix[top][i]);
      count++;
    }
    top++;
    for (var j = top; j <= bottom; j++) {
      spiral.push(matrix[j][right]);
      count++;
    }
    right--;
    for (var k = right; k >= left; k--) {
      spiral.push(matrix[bottom][k]);
      count++;
    }
    bottom--;
    for (var l = bottom; l >= top; l--) {
      spiral.push(matrix[l][left]);
      count++;
    }
    left++;
  }
  console.log(...spiral);
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
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
