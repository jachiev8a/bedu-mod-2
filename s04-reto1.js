
function calculateAverage(numbers) {
  let counter = 0, res = 0;
  for (let i of numbers) {
    counter++;
    res += i;
  }
  return res/counter;
}

console.log(calculateAverage([10,10,9]));