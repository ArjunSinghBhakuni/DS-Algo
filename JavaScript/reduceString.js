function runProgram(input) {
  var input = input.trim().split(" ");
  while (count < input.length) {
    var arr = [];
    var count = 0;
    if (input[count] == input[count + 1]) {
      count += 2;
    } else {
      console.log(count);
      arr.push(input[count]);
      ++count;
    }
    console.log(...arr);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`aaabccddd`);
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
