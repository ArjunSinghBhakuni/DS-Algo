function runProgram(input) {
  var max = 0;
  for (var i = 0; i < input.length; i++) {
    var sub = "";
    for (var j = i; j < input.length; j++) {
      sub += input[j];

      if (checkPalindrome(sub) && sub.length > max) {
        max = sub.length;
      }
    }
  }
  console.log(max);
}
function checkPalindrome(sub) {
  var rev = "";
  for (var i = sub.length - 1; i >= 0; i--) {
    rev += sub[i];
  }
  if (rev == sub) {
    return true;
  } else {
    return false;
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`myracecarisgood`);
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
