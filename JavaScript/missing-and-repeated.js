function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    var n= +input[line++];
    var arr=input[line++].trim().split(" ").map(Number);
    console.log(arr.find(e=>{for (let a = 1; a <=n; a++) {
    if(a!=e) return a;
    }}));
  }
}


if (process.env.USERNAME === "user") {
  runProgram(`3
5
1 2 3 3 4
2
1 1
3
1 2 2`);
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
