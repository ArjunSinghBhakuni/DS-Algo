function runProgram(input) {
  var input = input.trim().split("\n");
  var [N, M] = input[0].trim().split(" ").map(Number);
  var line = 1;
  var arr = [];
  for (var j = 0; j < N; j++) {
    arr.push(input[line++].trim().split(" ").map(Number));
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      nonPrime(arr[i][j]);
    }
  }
}

function nonPrime(num) {
  let count = 0;
  for (let i = 2; i <= +num; i++) {
    if (num % i == 0) {
      nonPrime = true;
    }
  }
  if (nonPrime) {
    count++;
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9 `);
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
