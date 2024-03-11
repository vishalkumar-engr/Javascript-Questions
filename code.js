1. Array.prototype.extraProperty = "Vishal";
const arr = [1, 2, 3, 4, 5];

for (let key in arr) {
  if (arr.hasOwnProperty(key)) console.log(key);
}
