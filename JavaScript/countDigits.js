function runProgram(input) {
  input = input.split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  var obj = {};
  for (var i = 0; i < n; i++) {
    if (obj[arr[i]] == undefined) obj[arr[i]] = 1;
    else obj[arr[i]] += 1;
  }
  console.log(...Object.values(obj));
}

if (process.env.USERNAME === "user") {
  runProgram(`10
  0 1 0 1 1 1 0 2 2 0 `);
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
