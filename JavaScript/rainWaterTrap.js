function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = +input[0];
  var line = 2;
  for (var i = 0; i < testcase; i++) {
    var arr = input[line].trim().split(" ").map(Number);
    line = line + 2;
    console.log(amountOfWater(arr));
  }

  function amountOfWater(arr) {
    let left = [];
    let right = [];
    let ans = 0;

    let left_high = arr[0];
    let right_high = arr[arr.length - 1];

    for (var i = 0; i < arr.length; i++) {
      if (left_high < arr[i]) {
        left_high = arr[i];
        left.push(left_high);
      } else {
        left.push(left_high);
      }
    }
    // console.log(left);

    for (var i = arr.length - 1; i >= 0; i--) {
      if (right_high < arr[i]) {
        right_high = arr[i];
        right[i] = right_high;
      } else {
        right[i] = right_high;
      }
    }
    // console.log(right);
    for (var i = 0; i < arr.length; i++) {
      var call = area(left[i], right[i], arr[i]);
      ans = ans + call;
    }
    function area(left, right, arr) {
      let unit = Math.min(left, right) - arr;
      return unit;
    }
    return ans;
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
  5
  3 2 0 4 6
  7
  7 0 3 6 2 3 5`);
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
