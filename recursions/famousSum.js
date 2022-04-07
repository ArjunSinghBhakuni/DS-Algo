function runProgram(input) {
  var [n, k] = input.trim().split(" ").map(Number);
  let num = 0;
  for (let i = 0; i < n.length; i++) {
    num += Number(a[i]);
  }
  num *= k;
  console.log(sum(num.toString()));
}

function sum(num) {
  if (num.length == 0) return 0;
  if (num.length == 1) return Number(num);
  let temp = 0;
  for (let i = 0; i < num.length; i++) {
    temp += Number(num[i]);
  }
  let tmp1 = temp.toString();
  return sum(tmp1);
}

if (process.env.USERNAME === "user") {
  runProgram(`123 3`);
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
