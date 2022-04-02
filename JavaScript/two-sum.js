function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var [size, target] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    var left = 0;
    var right = size - 1;
    while (left < right) {
      var sum = arr[left] + arr[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return left, right;
      }
    }
    if (sum != target) console.log(`-1 -1`);
    else console.log(left, right);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`3
      4 9
      2 7 11 15
      5 10
      1 2 3 5 5
      2 100
      48 49`);
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
