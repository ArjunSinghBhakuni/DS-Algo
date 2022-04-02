function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    let [N, Q] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    let sortedArr = arr.sort();
    if (N == 1) console.log(0);
    if (N > 1) {
      let count = 0;
      for (let i = 1; i < N; i++) {
        count += Math.abs(sortedArr[i] - sortedArr[i - 1]);
      }
      console.log(count * Q);
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
    2 4
    2 1
    1 5
    3`);
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
