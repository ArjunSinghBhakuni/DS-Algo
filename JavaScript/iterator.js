// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

// Create an Iterator
let iterator = myNumbers[Symbol.iterator]();

let text = "";
while (true) {
  const result = iterator.next();
  if (result.done) break;
  text += result.value + " ";
}
console.log(text);

// Create a Set
const letters = new Set(["a", "b", "c"]);

// List all Elements
let text2 = "";
letters.forEach(function (value) {
  text2 += value + " ";
});

console.log(text2);

// Create a Set
const letters3 = new Set(["a", "b", "c"]);

// List all Elements
let text3 = "";
for (const x of letters3.values()) {
  text3 += x + " ";
}

console.log(text3);

// Create a Set
const letters4 = new Set(["a", "b", "c"]);

// List all entries
const iterator4 = letters4.entries();
let text4 = "";
for (const entry of iterator4) {
  text4 += entry + " ";
}

console.log(text4);
