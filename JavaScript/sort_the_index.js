function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  for (let i = 0; i < testcase; i++) {
    let min = i;
    for (let j = i + 1; j < testcase; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
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
