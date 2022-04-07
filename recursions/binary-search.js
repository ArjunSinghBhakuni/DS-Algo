function runProgram(input) {
  var input = input.trim().split("\n");
  var [len, key] = input[0].trim().split(" ");
  var arr = input[1].trim().split(" ").map(Number);
  let lo = 0;
  let hi = len - 1;
  console.log(binarySearch(key, lo, hi, arr));
}

function binarySearch(key, lo, hi, arr) {
  if (lo > hi) return -1;
  let mid = lo + Math.floor((hi - lo) / 2);
  if (arr[mid] == key) return 1;
  if (arr[mid] > key) return binarySearch(key, lo, mid - 1, arr);
  else return binarySearch(key, mid + 1, hi, arr);
}

if (process.env.USERNAME === "user") {
  runProgram(`5 0
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
