function runProgram(input) {
  input = input.trim().split("\n");
  let num = +input[0];
  let str = input[1].trim();
  let new_str = [];
  let curr = 0;
  subSequence(str, new_str, curr);
}

function subSequence(str, new_str, curr) {
  if (new_str.length > 0) {
    console.log(new_str.join(""));
  }
  if (curr == str.length) return;
  for (let i = curr; i < str.length; i++) {
    new_str.push(str[i]);
    subSequence(str, new_str, i + 1);
    new_str.pop();
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`4
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
