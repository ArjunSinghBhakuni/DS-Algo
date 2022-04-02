function runProgram(input) {
  var input = input.trim().split("\n");
  var [len, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  const arr2 = [];
  for (var i = 0; i < len - 2; i++) {
    var maximumSub = [];
    for (var n = i; n < i + k; n++) {
      maximumSub.push(arr[n]);
    }
    var sum = 0;
    for (let a = 0; a < maximumSub.length; a++) {
      sum += maximumSub[a];
    }
    arr2.push(sum);
  }
  let largestSum = arr2[0];
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > largestSum) {
      largestSum = arr2[i];
    }
  }
  console.log(largestSum);
}

if (process.env.USERNAME === "user") {
  runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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
