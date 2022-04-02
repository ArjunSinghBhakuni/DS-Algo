function runProgram(input) {
  var input = input.split("\n");
  var [N, K] = input[0].trim().split(" ").map(Number);
  var array = input[1].trim().split(" ").map(Number);
  var arr = array.sort((a, b) => a - b);
  var sum = 0;
  var count = 0;
  for (var i = 0; i < N; i++) {
    sum += arr[i];
    if (sum <= K) {
      count++;
    } else {
      break;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`4 10
  5 4 2 4`);
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
