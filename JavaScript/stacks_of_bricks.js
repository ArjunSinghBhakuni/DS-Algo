function runProgram(input) {
    var input = input.split("\n");
    var testcase = +input[0].trim();
    var line = 1;
    for (let i = 0; i < testcase; i++) {
      let N = +input[line++].trim(); 
      let X = +input[line++].trim();
      let Y = +input[line++].trim();
      let intial=[];
      let final=[];
      for(let i=line;i<line+N;i++){
        let arr = input[i].trim().split(" ").map(Number); 
        intial.push(arr[0]);
        final.push(arr[1]);
      }
      // console.log(line)
      line=line+N;
      console.log(intial,final)
      intial.sort((a, b) => a - b)
      final.sort((a, b) => a - b);
      let minimizeSum=0;
      for(let j = 0;j<N;j++) {
        if(intial[j]>final[j]) {
            minimizeSum += (intial[j]-final[j])*Y;
        } 
        else {
            minimizeSum += (final[j]-intial[j])*X;
        }
 }
 console.log(minimizeSum);
    }
  }
  
  if (process.env.USERNAME === "user") {
    runProgram(`1
    3
    6
    4
    3 1
    1 2
    1 2`);
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
  
