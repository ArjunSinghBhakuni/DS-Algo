function permutation(arr, new_arr, curr) {
  if (curr == arr.length) {
    new_arr.push(arr.join(" "));
    return;
  }
  for (let i = curr; i < arr.length; i++) {
    swap(arr, i, curr);
    permutation(arr, new_arr, curr + 1);
    swap(arr, i, curr);
  }
  return new_arr;
}

function swap(arr, i, curr) {
  let temp = arr[i];
  arr[i] = arr[curr];
  arr[curr] = temp;
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var size = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var k = permutation(arr, [], 0);
  k.sort();
  for (let i = 0; i < k.length; i++) {
    console.log(k[i]);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`3
  1 2 3`);
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
