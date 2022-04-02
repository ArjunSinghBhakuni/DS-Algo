function runProgram(input) {
  var input = input.trim().split("\n");
  var [len, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  let lo = 0;
  let hi = len - 1;
  let midval = 999;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] > key) {
      midval = mid;
      hi = mid - 1;
    } else if (arr[mid] > key) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  if (midval == 999) console.log(-1);
  else console.log(midval);
}

if (process.env.USERNAME === "user") {
  runProgram(`10 3
  0 2 4 4 5 5 7 7 9 10`);
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
