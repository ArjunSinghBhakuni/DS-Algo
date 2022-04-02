function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < prices.length; i++) {
    k -= prices[i];
    count++;
    if (0 === k) {
      return count;
    } else if (k < 0) {
      return --count;
    }
  }
  return count;
}
