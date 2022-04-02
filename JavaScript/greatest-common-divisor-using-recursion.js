function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    var [a,b] = input[line++].trim().split(" ").map(Number);
    console.log(gcd(a,b));
  }
}

function gcd(small, large) {
    let r = large % small;
    if (r == 0)
        return small;
    else
        return gcd(r, small);
}

if (process.env.USERNAME === "user") {
  runProgram(`2
6 9
2 25`);
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
