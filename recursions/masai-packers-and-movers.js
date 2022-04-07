function runProgram(input) {
  input = input.trim().split("\n");
  var [K, N] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  packers(K, N, arr);
  console.log(sum);
}
var sum = 0;

function packers(k, n, arr) {
  if (k < 0) return 0;
  if (k == 0) {
    sum += 1;
    return;
  }
  for (let i = 0; i < n; i++) {
    packers(k - arr[i], n, arr);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`3 3
  1 2 3`);
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
