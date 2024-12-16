function foo(x) {
  if (x == null) {
    return 0;
  } else {
    return x.length;
  }
}

console.log(foo(null)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo(undefined)); // TypeError: Cannot read properties of undefined (reading 'length')