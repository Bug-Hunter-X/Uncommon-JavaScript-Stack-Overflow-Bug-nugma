function foo(a, b) {
  let result = b;
  while (a > 0) {
    result += a;
    a--;
  }
  return result;
}

console.log(foo(5, 10)); // This will now work correctly for larger values of 'a' without causing stack overflow.