function runProgram(input) {
  var input = input.trim().split("\n");
  var [len, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  let lo = 0;
  let hi = len - 1;
  let count = 0;
  let mid = lo + Math.floor((hi - lo) / 2);
  if (arr[mid] == key) {
    count = 0;
  } else if (arr[mid] > key) {
    hi = mid - 1;
  } else {
    lo = mid + 1;
  }
  for (let i = lo; i <= hi; i++) {
    if (arr[i] == key) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`6 3
    2 3 3 3 6 9`);
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
