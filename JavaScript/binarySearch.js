function runProgram(input) {
  var input = input.trim().split("\n");
  var [len, key] = input[0].trim().split(" ");
  var arr = input[1].trim().split(" ").map(Number);
  let lo = 0;
  let hi = len - 1;
  var isPresent = false;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] == key) {
      isPresent = true;
      break;
    } else if (arr[mid] > key) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  if (isPresent) console.log(1);
  else console.log(-1);
}

if (process.env.USERNAME === "user") {
  runProgram(`5 7
  2 -2 0 3 4`);
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
