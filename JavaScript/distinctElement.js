function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let count = 0;
  let num = "";
  for (let i = 0; i < testcase; i++) {
    for (let j = i + 1; j < testcase; j++) {
      if (arr[i] < arr[j]) {
        num += arr[j] + " ";
        count++;
      }
    }
  }
  if (count == 3) console.log(num);
}

if (process.env.USERNAME === "user") {
  runProgram(`8
    1 2 3 4 2 1 6 5`);
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
