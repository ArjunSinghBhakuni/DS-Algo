function runProgram(input) {
  var input = input.split("\n");
  var [r, c] = input[0].trim().split(" ").map(Number);
  var line = 1;
  let matrix = [];
  for (let i = 0; i < r; i++) {
    matrix.push(input[line++].trim().split(" ").map(Number));
  }
  for (let i = 0; i < r; i++) {
    let newMatrix = [];
    for (let j = 0; j < c; j++) {
      if (matrix[i][j] == 0) {
        newMatrix.push(1);
      } else {
        newMatrix.push(0);
      }
    }
    console.log(...newMatrix);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`3 2
    1 0
    0 1
    1 1`);
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
