function runProgram(input) {
  var input = input.split("\n");
  var num = input[0];
  var arr = input[1].split(" ").map(Number);
  let max = 0;
  let index = 0;
  for (var i = 0; i < num; i++) {
    let count = 0;
    for (var j = 0; j < num; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
      if (count > max) {
        max = count;
        index = i;
      }
    }
  }
  console.log(arr[index]);
}

if (process.env.USERNAME === "user") {
  runProgram("5\n0 2 2 6 9");
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
