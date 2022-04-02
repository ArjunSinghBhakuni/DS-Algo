function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  var bubble = false;
  while (!bubble) {
    bubble = true;
    for (var i = 1; i < testcase; i++) {
      if (arr[i - 1] > arr[i]) {
        bubble = false;
        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  console.log(...arr);
}

if (process.env.USERNAME === "user") {
  runProgram(`5
    3 5 0 9 8`);
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
