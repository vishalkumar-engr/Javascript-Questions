1. console.log(undefined+undefined) -> O/P -> NAN
2. console.log(typeof null) -> O/P -> object
3. const obj = {
  first: "Vishal",
  last: "Singh",
  printName: function () {
    const { first, last } = this;
    console.log(first + last);
  },
};

let m = obj.printName;
m();

O/P -> NAN

4.
