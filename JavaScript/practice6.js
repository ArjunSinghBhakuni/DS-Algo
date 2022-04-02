function runProgram(input) {
  // const obj1={a:10};
  // const obj2=obj1;
  // obj2.a=20;
  // console.log(obj1)
  // console.log(obj2)
  function test(num=1){
    console.log(typeof num);
  }
  test(null);
  test(undefined)
  test("s")
  test(10)
}

if (process.env.USERNAME === "user") {
  runProgram(``);
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
