function runProgram(input) {
  input = input.trim().split("\n");
  var line = 0;
  var [r1, c1] = input[line++].trim().split(" ").map(Number);
  var matrix1 = [];
  for (var j = 0; j < r1; j++) {
    var arr = input[line++].trim().split(" ").map(Number);
    matrix1.push(arr);
  }
  var [r2, c2] = input[line++].trim().split(" ").map(Number);
  var matrix2 = [];
  for (var j = 0; j < r2; j++) {
    var arr = input[line++].trim().split(" ").map(Number);
    matrix2.push(arr);
  }
  var sum1 = 0;
  for (var i = 0; i < r1; i++) {
    for (var j = 0; j < c1; j++) {
      sum1 += matrix1[i][j];
    }
  }
  var sum2 = 0;
  for (var i = 0; i < r2; i++) {
    for (var j = 0; j < c2; j++) {
      sum2 += matrix2[i][j];
    }
  }
  if (sum1 > sum2) console.log(sum1);
  else console.log(sum2);
}

if (process.env.USERNAME === "user") {
  runProgram(`3 4
  1 2 3 4
  0 5 6 1
  9 3 0 8
  2 2
  8 8
  8 8`);
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
