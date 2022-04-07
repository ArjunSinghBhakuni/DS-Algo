function runProgram(input) {
  var input = input.trim().split("\n");
  var size = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(...quickSort(arr));
}

function quickSort(arr) {
  if (arr.length == 0) return;
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (const el of arr.slice(0, arr[arr.length - 1])) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

if (process.env.USERNAME === "user") {
  runProgram(`5
        3 5 0 9 8`);
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
