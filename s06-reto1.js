
let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays) {
  return arrays.reduce(function(flat, current) {
    return flat.concat(current);
  }, []);
}

console.log(flatten(arrays));