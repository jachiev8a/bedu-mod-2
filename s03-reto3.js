
// fibo
function fibonacciSequence(limit) {
  
  let n1 = 1, n2 = 1, next_term;
  
  for (let i = 1; i<=limit; i++) {
    console.log(n1);
    next_term = n1 + n2;
    n1 = n2;
    n2 = next_term;
  }

}

fibonacciSequence(5);