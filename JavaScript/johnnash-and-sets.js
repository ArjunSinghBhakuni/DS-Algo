function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let a = 0; a < testcase; a++) {
    var size1 = input[line++].trim();
    var arr1 = input[line++].trim().split(" ").map(Number);
    var size2 = input[line++].trim();
    var arr2 = input[line++].trim().split(" ").map(Number);
    let num = [];
    for (let i = 0; i < size1; i++) {
      if (arr1[i] != arr1[i + 1]) {
        num.push(arr1[i]);
      }
    }
    for (let k = 0; k < num.length; k++) {
      for (let j = 0; j < size2; j++) {
        if (num[k] != arr2[j]) {
          num.push(arr2[j]);
        }
      }
    }
    num.sort();
    console.log(...num);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
    4
    1 2 3 4
    5
    1 2 3 4 5`);
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
