function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    // console.log(arr)
    var obj = {};
    for (let j = 0; j < len; j++) {
      // console.log(obj[arr])
      if (obj[arr[j]] == undefined) {
        obj[arr[j]] = 1;
      } else {
        obj[arr[j]] += 1;
      }
    }
    // console.log(obj)
    for (k in obj) {
      if (obj[k] == 1) {
        console.log(k);
      }
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
1
5
5
1 2 1 3 2`);
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
