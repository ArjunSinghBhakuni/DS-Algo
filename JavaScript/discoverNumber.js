function runProgram(input) {
  input = input.trim().split("\n");
  var [N, Q] = input[0].trim().split(" ");
  var array = input[1].trim().split(" ").map(Number);
  var arr = array.sort((a, b) => a - b);
  var line = 2;
  for (let i = 0; i < Q; i++) {
    let lo = 0;
    let hi = N - 1;
    var key = +input[line++].trim();
    var isPresent = false;
    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (arr[mid] == key) {
        isPresent = true;
        break;
      }
      if (arr[mid] > key) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    isPresent ? console.log("YES") : console.log("NO");
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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
