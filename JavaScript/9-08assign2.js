function runProgram(input) {
  // var input = input.trim().split("\n");
  // var s1 = input[0].trim().split("");
  // var s2 = input[1].trim().split("");
  // for (var i = 0; i < s1.length; i++) {
  //   if (s1[i] != s2[i]) {
  //     console.log(s1[i]);
  //   }
  // }
  
  input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1]
    .trim()
    .split(" ")
    .map((el) => el.split("").reduce((a, b) => +a + +b, 0));
  console.log(...arr);
}

if (process.env.USERNAME === "user") {
  runProgram(`4
  23 34 345 1256`);
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
