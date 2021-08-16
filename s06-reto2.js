let array = [0, 1, false, 2, '', 3];

function compact(array) {
  return array.filter(function(element) {
    return !!element;
  });
}

console.log(compact(array));