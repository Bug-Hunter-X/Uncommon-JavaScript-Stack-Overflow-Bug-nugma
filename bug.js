function foo(a, b) {
  if (a === 0) {
    return b; 
  }
  return foo(a - 1, a + b);
}

console.log(foo(5, 10)); // This will cause a stack overflow error for larger values of 'a'