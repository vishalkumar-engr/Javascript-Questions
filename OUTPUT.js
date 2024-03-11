1. console.log(undefined+undefined) -> O/P -> NAN
2. console.log(typeof null) -> O/P -> object
3. console.log({} === {}) || console.log([] === []) ==> false (Becouse of both are non-premetive data type it's passes the ref not value)
4. const obj = {
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
