function runProgram(input) {
  var input = input.trim("").split(" ").map(Number);
  var [n, r] = input;
  console.log(gp(n, r).toFixed(4));
}
function gp(n, r) {
  if (n == 0) {
    return 1;
  } else var ans = 1 / Math.pow(r, n) + gp(n - 1, r);
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
