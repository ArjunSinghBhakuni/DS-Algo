function runProgram(input) {
  input = input.trim().split("\n");
  var size = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(mergeSort(arr).join(" "));
}

function mergeSort(arr) {
  if (arr.length == 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {
  let output = [];
  let left = 0;
  let right = 0;
  while (left < leftArr.length && right < rightArr.length) {
    const leftEl = leftArr[left];
    const rightEl = rightArr[right];
    if (leftEl < rightEl) {
      output.push(leftEl);
      left++;
    } else {
      output.push(rightEl);
      right++;
    }
  }
  return [...output, ...leftArr.slice(left), ...rightArr.slice(right)];
};

if (process.env.USERNAME === "hello") {
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
