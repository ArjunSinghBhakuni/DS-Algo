function runProgram(input) {
    input=input.trim().split("\n");
    var testcase=+input[0];
    var line=1;
    for(let i=0;i<testcase;i++){
        var N=+input[line++];
        var arr=input[line++].trim().split(" ").map(a=>a**2).sort((a,b)=>a-b).map(b=>Math.sqrt(b));
        console.log(arr);
    }
}

if (process.env.USERNAME === "user") {
runProgram(`1
5
-2 3 1 -4 4`);
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