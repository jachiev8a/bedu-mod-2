
function keyValuePairs(array) {
  let  obj = {}, string = '';
  string = array[0];
  obj[string] = array[1];
  
  return obj;
}

console.log(keyValuePairs(['brand', 'Nissan']));