1. Array.prototype.extraProperty = "Vishal";
const arr = [1, 2, 3, 4, 5];

for (let key in arr) {
  if (arr.hasOwnProperty(key)) console.log(key);
}

2. Create Custom forEach with custom case
// Basic prototype
Array.prototype.forEachTwo = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i]);
  }
};

// Advanced Prototype
Array.prototype.forEachThree = function (callBack, thisContext) {
  if (typeof callBack !== "function") {
    throw `Please pass function`;
  }
  const length = this.length;
  let i = 0;
  while (i < length) {
    if (this.hasOwnProperty) {
      callBack.call(thisContext, this[i], i, this);
    }
    i++;
  }
};

// Uppercase prototype
Array.prototype.Ucase = function(){
  return this.map((item)=>item.toUpperCase())
}
