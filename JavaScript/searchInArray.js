function runProgram(input) {
  input = input.trim().split("\n");
  const [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let isPresent = false;
  for (var i = 0; i < n; i++) {
    if (arr[i] == k) {
      isPresent = true;
      break;
    }
  }
  if (isPresent) console.log(i);
  else console.log(-1);
}

if (process.env.USERNAME === "user") {
  runProgram(`5 1
    3 4 5 1 2`);
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
