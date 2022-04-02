function runProgram(input) {
  var input = input.split("\n");
  var t1 = input[0].trim();
  var arr1 = input[1].trim().split("");
  var t2 = input[2].trim();
  var arr2 = input[3].trim().split("");
  var present = true;
  while (t1 >= t2) {
    for (var i = 0; i < t1; i++) {
      if (arr2[i] != arr1[i]) {
        present = false;
      } else {
        present = true;
      }
    }
  }
  if (present == true) console.log("Yes");
  else console.log("No");
}

if (process.env.USERNAME === "hello") {
  runProgram(`5
    aabbc
    4
    abcd`);
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
