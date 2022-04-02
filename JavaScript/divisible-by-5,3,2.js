function runProgram(input) {
  var input = input.trim().split("\n");
  var N = +input[0];
  var arr=input[1].trim().split(' ').map(Number);
  var num=[]
//   console.log(N,arr)
//   console.log(arr.length)
//  var five=arr.filter(el=> el%5==0);
//  num.push(five.length)
//  var three = arr.filter((el) => el % 3 == 0);
//  num.push(three.length);
//   var two = arr.filter((el) => el % 2 == 0);
//   num.push(two.length);
//   var other = arr.filter((el) => el % 5 != 0 && el % 3 != 0 && el % 2 != 0);
//   num.push(other.length);
//   console.log(...num)
var c1=0;
var c2=0;
var c3=0;
var c4=0;
for(let i=0;i<N;i++){
if (arr[i] % 5 == 0) {
  c1++;
} else if (arr[i] % 3 == 0) {
  c2++;
} else if (arr[i] % 2 == 0) {
  c3++;
}else{
    c4++;
}
}
num.push(c1,c2,c3,c4)
console.log(...num)
}

if (process.env.USERNAME === "user") {
  runProgram(`4
1 2 3 4`);
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
