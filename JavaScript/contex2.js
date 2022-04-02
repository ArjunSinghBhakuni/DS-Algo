function runProgram(input) {
  var num = input.split("\n");
  var row = num[0].split(" ").map(Number);
  var size = row[0];
  var target = row[1];
  var arr = num[1].split(" ").map(Number);
  var sum = 0;
  var count = 0;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      for (var k = i; k <= j; k++) {
        sum += arr[k];
        if (sum == target) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram("6 -4\n2 0 -6 3 -7 5");
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
