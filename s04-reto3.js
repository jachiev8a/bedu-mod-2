
var singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, property) {
  arr = [];
  for (let i = 0; i<list.length; i++) {
    arr.push((list[i][property]));
  }
  return arr;
}

console.log(pluck(singers, 'name'));