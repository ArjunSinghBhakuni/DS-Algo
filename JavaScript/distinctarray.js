function distinctStr(arr) {
  var distinctArr = {};
  for (var l = 0; l < arr.length; l++) {
    if (distinctArr[arr[l]]) {
      distinctArr[arr[l]] += 1;
    } else {
      distinctArr[arr[l]] = 1;
    }
  }
  var arr = Object.keys(distinctArr);
  return arr.length;
}
function runProgram(input) {
  var input = input.split("\n");
  var testcase = +input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var len = input[line++];
    var str = input[line++];
    var arr = [];
    for (var j = 0; j < len; j++) {
      var a = "";
      for (var k = j; k < len; k++) {
        a += str[k];
        arr.push(a);
      }
    }
    console.log(distinctStr(arr));
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2\n5\nabcde\n3\naaa`);
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
