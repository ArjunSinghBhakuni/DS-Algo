function runProgram(input) {
  var input = input.trim().split("\n");
  var size = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(...mergeSort(arr));
}

function merge(arr1, arr2) {
  let resultArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      resultArr.push(arr1[i]);
      i++;
    } else {
      resultArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    resultArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    resultArr.push(arr2[j]);
    j++;
  }
  return resultArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
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
