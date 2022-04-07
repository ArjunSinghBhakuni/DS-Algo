function runProgram(input) {
  var [n,r]=input.trim().split(" ").map(Number);
  console.log(gp(n,r));
}

function gp(n,r){
    if (n == 0) return 1;
    var ans = 1 / Math.pow(r, n) + gp(n - 1);
    return ans;
}

if (process.env.USERNAME === "user") {
  runProgram(`1 1`);
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
