function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var matrix = [];
    const size = input[line++].trim();
    for (var j = 0; j < size; j++) {
      matrix.push(input[line++].trim().split(" ").map(Number));
    }
    ntraverse(matrix, size);
  }
}

function ntraverse(mat, size) {
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  const newMatrix = [];
  for (let i = bottom; i >= top; i--) {
    newMatrix.push(mat[i][left]);
  }
  left++;
  for (let i = left; i <= right; i++) {
    newMatrix.push(mat[i][i]);
  }
  bottom--;
  for (let i = bottom; i >= top; i--) {
    newMatrix.push(mat[i][right]);
  }
  console.log(...newMatrix);
}

if (process.env.USERNAME === "user") {
  runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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
