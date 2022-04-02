function sumd(mat, size) {
  var sum = 0;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i == j || i + j == size - 1) {
        sum += mat[i][j];
      } else if (i == 0 || j == 0 || i == size - 1 || j == size - 1) {
        sum += mat[i][j];
      }
    }
  }
  console.log(sum);
}
function runProgram(input) {
  input = input.trim().split("\n");
  var size = Number(input[0]);
  var line = 1;
  var mat = [];
  for (var i = 0; i < size; i++) {
    mat.push(input[line++].trim().split(" ").map(Number));
  }
  sumd(mat, size);
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
