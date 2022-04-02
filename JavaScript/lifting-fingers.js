function runProgram(input) {
    var input = input.trim().split("\n");
    var testcase = +input[0].trim();
    var line=1;
    for(let i=0;i<testcase;i++){
        var count=1;
        var arr=input[line++].trim().split("");
        for(let i=0;i<arr.length-1;i++){
            // console.log(arr[i])
            if(arr[i] != arr[i+1]){
                count++;
            }
        }
        console.log(count)
    }
      }
  
  if (process.env.USERNAME === "user") {
    runProgram(`2
    aaaaa
    abbbaaz`);
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
  