function runProgram(input) {
    input=input.trim().split("\n");
    // console.log(input)
    var testcase=+input[0];
    var line=1;
    for(let i=0;i<testcase;i++){
        var [N,K]=input[line++].trim().split(" ").map(Number);
        var arr=input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
        // console.log(K,arr);
       var upperSum=0;
       for(let j=K;j<N;j++){
           upperSum+=arr[j];
       }
       var lowerSum=0;
       for(let k=0;k<N-K;k++){
           lowerSum+=arr[k];
       }
       console.log(upperSum-lowerSum)
    }
}

if (process.env.USERNAME === "user") {
runProgram(`1
5 1
1 2 3 4 5`);
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