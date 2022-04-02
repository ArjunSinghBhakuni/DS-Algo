function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let t = 0; t < testcase; t++) {
    var len = input[line++].trim();
    var arr1 = input[line++].trim().split(" ").map(Number);
    var arr2 = input[line++].trim().split(" ").map(Number);
    twoSortedArrays(arr1, arr2, len);
  }
}
function twoSortedArrays(arr1, arr2, len) {
  let left = 0;
  let right = len - 1;
  let count = 0;
  while (left < len && right >= 0) {
    if (arr1[left] < arr2[right]) left++;
    else if (arr1[left] > arr2[right]) right--;
    else {
      count++;
      left++;
      right--;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  6
  1 2 2 3 4 5
  4 4 3 2 1 1 `);
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
