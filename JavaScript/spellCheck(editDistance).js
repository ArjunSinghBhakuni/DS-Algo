function runProgram(input) {
    input=input.trim().split("\n");
    // console.log(input)
    let testcase=input[0].trim();
    // console.log(testcase)
    let line=1;
    for(let i=0;i<testcase;i++){
    const str1=input[line++].trim()
    const str2=input[line++].trim()
    if(str1.length===str2.length){
        let count=0;
        for(let j=0;j<str1.length;j++){
            if(str1[j]!=str2[j]){
                count++;
            }
        }
        console.log(count)
    }else{
        console.log(Math.abs(str1.length-str2.length));
           
            }
    }
}

if (process.env.USERNAME === "user") {
runProgram(`3
abcde
abde
abde
abcde
abcde
abxde
`);
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