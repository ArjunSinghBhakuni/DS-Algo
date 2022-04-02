function runProgram(input) {
  var input = input.trim().split("\n");
  var matrix = [];
  for (var i = 0; i < input.length; i++) {
    matrix.push(input[i].trim().split(" ").map(Number));
  }
  var sum1 = 0;
  var diagonal1 = [];
  for (var i = 0; i < matrix.length; i++) {
    diagonal1.push(matrix[i][i]);
  }
  for (var i = 0; i < diagonal1.length; i++) {
    sum1 += diagonal1[i];
  }
  var top = 0;
  var bottom = matrix.length - 1;
  var left = 0;
  var right = matrix.length - 1;
  var diagonal2 = [];
  for (var i = 0; i < matrix.length; i++) {
    diagonal2.push(matrix[top++][right--]);
  }
  var sum2 = 0;
  for (var i = 0; i < diagonal2.length; i++) {
    sum2 += diagonal2[i];
  }
  console.log(sum1 - sum2);
}

if (process.env.USERNAME === "user") {
  runProgram(`1 2 3 4
    5 6 7 6
    7 8 9 9
    2 4 1 3`);
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
