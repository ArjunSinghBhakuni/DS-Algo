function runProgram(input) {
  input = input.trim().split("\n");
  var testcase=+input[0];
  var N=Math.ceil(testcase/3);
//   console.log(N)
  var count=0;
  var major=[];
  var arr = input[1].trim().split(" ").map(Number);
//   console.log(N)
  for(var i=0;i<testcase;i++){
      for(var j=i+1;j<testcase;j++){
        //   major.push(arr.filter((arr[i])=>arr[i]==arr[j]))
          if(arr[i]==arr[j]){
              count++;
              if (count >= N) {
                major.push(arr[j]);
              }
              break;
          }
    }
  }
//   console.log(major)
  var majority = major.sort((a, b) => a - b);
  console.log(...majority)
}

if (process.env.USERNAME === "user") {
  runProgram(`3
8 8 8`);
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
