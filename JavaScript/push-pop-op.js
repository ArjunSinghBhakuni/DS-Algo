function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = +input[0];
  var st=[];
  var sorted=[];
  for (let i = 1; i <= testcase; i++) {
    //   console.log(input[i].trim().split(" ")[0])
      if(input[i].trim().split(" ")[0]==="PUSH") st.push(input[i].trim().split(" ").map(Number)[1]);
      if(input[i].trim()==="MIN"){
       sorted.push(...st);
       console.log(sorted.sort((a,b)=>a-b)[0]);
       sorted=[];
      }
      if(input[i].trim()==="POP") st.length==0 ?console.log("EMPTY"):st.pop();
  }
//   console.log(st);
}

if (process.env.USERNAME === "user") {
  runProgram(`11
PUSH 5
PUSH 7
PUSH 3
PUSH 8
PUSH 10
MIN
POP
POP
MIN
POP
MIN`);
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
