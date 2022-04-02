function runProgram(input) {
  var input = input.split("\n");
  var N = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  var K = +input[2].trim();
  var isPresent = false;
  for (var i = 0; i < N; i++) {
    if (arr[i] == K) {
      isPresent = true;
      break;
    }
  }
  if (isPresent == true) {
    console.log(i);
  } else {
    arr.push(K);
    arr.sort((a, b) => a - b);
    console.log(arr.indexOf(K));
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`4
  1 3 5 6
  2 `);
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
