function chiku(e) {
  return new Promise(function (resolve, reject) {
    let stamp = document.createElement("stamp");
    stamp.src = e;
    document.head.append(stamp);

    stamp.onload = function () {
      resolve("stamped");
    };
    stamp.onerror = function () {
      reject("Unstamped");
    };
  });
}
chiku(`/myPractice.js`)
  .then(function (res) {
    console.log(res);
    hello();
  })
  .catch(function (err) {
    console.log(err);
  });

async function test() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), 3000);
    let result = await promise;
    alert(result);
  });
}

test();
