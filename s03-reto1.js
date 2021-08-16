function power(base, exponent) {
  
  let res = 1;
  
  for (let i = 0; i<exponent; i++) {
    res *= base;
  }
  
  return res;
}

console.log(power(3,3));