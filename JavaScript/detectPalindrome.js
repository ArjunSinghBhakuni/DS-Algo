function detectPalindrome(N, string) {
  let list = [];
  for (let i = 0; i < N; i++) {
    if (list.includes(string[i])) {
      // console.log(list,string[i]);
      list.splice(list.indexOf(string[i]), 1);
      // console.log(list);
    }
    else list.push(string[i]);
  }
  if ((N % 2 == 0 && list.length == 0) || (N % 2 == 1 && list.length == 1))
    console.log(true);
  else console.log(false);
}

detectPalindrome(6,"aabbcc")
