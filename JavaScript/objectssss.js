var objects = {
  name: ["Rice", "Dal", "Salt"],
  price: [2, 3, 1],
  quantity: [60, 50, 20],
  total: function () {
    var sum = 0;
    for (var i = 0; i < this.name.length; i++) {
      sum += this.price[i] * this.quantity[i];
    }
    return sum;
  },
};

console.log(objects.total());
