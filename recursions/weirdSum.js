var out = "";
function subSequence(arr, subarr, max, curr) {
  if (curr == arr.length) {
    let sum = 0;
    if (subarr.length > 1 && !subarr.includes(max)) {
      for (var i = 0; i < subarr.length; i++) {
        sum += subarr[i];
      }
      if (max === sum) {
        out = "Yes";
        return;
      }
    }
    return;
  }
  subSequence(arr, subarr, max, curr + 1);
  subarr.push(arr[curr]);
  subSequence(arr, subarr, max, curr + 1);
  subarr.pop();
}
function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;
  let N = +input[line++];
  for (var i = 1; i <= N; i++) {
    let size = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    let max = 0;
    for (var j = 0; j < size; j++) {
      max = Math.max(max, arr[j]);
    }
    out = "No";
    subSequence(arr, [], max, 0);
    console.log(out);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`3
  5
  6 3 8 2 -4
  5
  -10 -7 10 2 -2
  5
  -4 -5 6 -3 9`);
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
