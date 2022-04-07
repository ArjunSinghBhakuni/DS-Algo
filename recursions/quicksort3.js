function runProgram(input) {
  var input = input.trim().split("\n");
  var size = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  bubbleSort(size, arr);
  console.log(...arr);
}

function bubbleSort(size, arr) {
  if (size == 1) return;
  for (var i = 0; i < size - 1; i++)
    if (arr[i] < arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  bubbleSort(size - 1, arr);
}

if (process.env.USERNAME === "user") {
  runProgram(`5
  2 3 1 4 5`);
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
