
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

let test = function(n) {
  return n > 0;
}

let update = function(n) {
  return n - 1;
}

loop(3, test, update, console.log);