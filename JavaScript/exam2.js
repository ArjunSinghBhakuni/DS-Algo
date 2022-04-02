function runProgram(input) {
  var num = input.split("\n");
  var size = num[0];
  var str = num[1];
  var word = "";
  for (var i = 1; i < size; i += 2) {
    word += str[i];
  }
  console.log(word);
  var palindrome = false;
  for (var j = 0; j < word.length; j++) {
    for (var k = word.length - 1; k >= 0; k--) {
      if (word[j] == word[k]) {
        palindrome = true;
      }
    }
  }
  if (palindrome == true) console.log("yes");
  else console.log("no");
}

if (process.env.USERNAME === "user") {
  runProgram("6\nabcdec");
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
