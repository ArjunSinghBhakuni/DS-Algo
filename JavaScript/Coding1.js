var N = 5;
for (i = 1; i <= N; i++) {
  var output = "";
  for (j = 1; j <= N; j++) {
    if (i == 1 || i == N || j == 1 || j == N) {
      output = output + "* ";
    } else {
      output = output + "  ";
    }
  }
  console.log(output);
}
