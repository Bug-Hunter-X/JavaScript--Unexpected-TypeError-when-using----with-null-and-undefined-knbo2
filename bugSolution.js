function foo(x) {
  if (x === null || x === undefined) {
    return 0;
  } else {
    return x.length;
  }
}

//or using optional chaining
function foo(x) {
  return x?.length || 0; 
}
console.log(foo(null)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo(undefined)); // 0