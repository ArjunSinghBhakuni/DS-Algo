function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let a = 0; a < testcase; a++) {
    var n = input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    var s = [];
     let res = new Array(n);
        for (let i = n - 1; i >= 0; i--){
           if (s.length != 0){
             while (s.length != 0 && s[s.length-1] <= arr[i]){
                    s.pop();
                }
            }
            res[i] = s.length == 0 ? -1 : s[s.length-1];
            // console.log(res);
            s.push(arr[i]);
            // console.log(s)
        }
      console.log(...res);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
4
1 3 2 4`);
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
