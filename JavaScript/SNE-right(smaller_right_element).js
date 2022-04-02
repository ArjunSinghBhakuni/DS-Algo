function runProgram(input) {
  var input = input.split("\n");
  let testcase = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let count = 0;
  var sub = [];
  for (let i = testcase - 1; i >= 0; i--) {
    while (sub[sub.length - 1] >= arr[i]) {
      sub.pop();
    }
    if (sub.length == 0) {
      count++;
    }
    sub.push(arr[i]);
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`5
    4 2 1 3 7`);
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
