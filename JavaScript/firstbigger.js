function runProgram(input) {
  var input = input.trim().split("\n");
  var len = +input[0];
  var array = input[1].trim().split(" ").map(Number);
  var size = +input[2];
  var line = 3;
  for (var i = 0; i < size; i++) {
    var num = +input[line++];
    var bigger = [];
    for (var a = 0; a < len; a++) {
      if (array[a] > num) {
        bigger.push(array[a]);
      }
    }
    var smallest = bigger[0];
    for (var i = 1; i <= bigger.length; i++) {
      if (smallest > bigger[i]) {
        smallest = bigger[i];
      }
    }
    console.log(smallest);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`10
    13 89 81 66 81 63 71 76 73 81
    2
    65
    15
    `);
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
