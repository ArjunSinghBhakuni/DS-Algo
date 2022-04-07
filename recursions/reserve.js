function runProgram(input) {
  let N = +input[0];
  let arr = input[1].trim().split(" ");
  let a = [];
  let c = 0;
  console.log(gs(arr, a, c));
}

function gs(arr, a, c) {
  let ar = [];
  let q = 0;
  if (a.length > 0) {
    ar.push(a);
    let s = 0;
    for (let i = 0; i < ar.length; i++) {
      s + ar[i];
    }
    if (s % 2 != 0) {
      q++;
    }
    if (c == arr.length) {
      return q;
    }
    for (let i = c; i < arr.length; i++) {
      a += arr[i];
      gs(arr, a, i + 1);
      a = a.slice(0, -1);
    }
  }
}
