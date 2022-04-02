function runProgram(input) {
  var input = input.split("\n");
  var num1 = input[0];
  var word = "";
  var lettter = input[1].split(" ");
  for (var i = 0; i < lettter.length; i++) {
    word += lettter[i];
  }
  var any = false;
  if (num1.length == word.length) {
    for (var j = 0; j < num1.length; j++) {
      for (var k = 0; k < word.length; k++) {
        if (num1[j] == word[k]) {
          any = true;
        }
      }
    }
  }
  if (any == false) console.log(false);
  else console.log(true);
}

if (process.env.USERNAME === "user") {
  runProgram("anagram\nnag a ramifvh");
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
