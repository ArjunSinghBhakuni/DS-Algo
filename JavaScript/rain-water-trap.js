function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = +input[0];
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    let N = +input[line++];
    const arr = input[line++]
      .trim()
      .split(" ")
      .map(Number);
      let water=0;
      for(let i=1;i<N-1;i++){
         let left=arr[i];
         for(let j=0;j<i;j++){
             left=Math.max(left,arr[j]);
            //  to find left most maximum element
         }
         let right = arr[i];
         for (let j = i+1; j < N; j++) {
           right = Math.max(right, arr[j]);
           //  to find right most maximum element
         }
         water +=Math.min(left,right) - arr[i];
      }
    console.log(water)
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
