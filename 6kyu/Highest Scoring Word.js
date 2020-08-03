//Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {

  return x.split(' ').reduce((acc, elem) => {
    if (getVal(elem) > getVal(acc))
      acc = elem;
    return acc;
  })
}
function getVal(str) {
  const map = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['f', 6],
  ['g', 7], ['h', 8], ['i', 9], ['j', 10], ['k', 11], ['l', 12],
  ['m', 13], ['n', 14], ['o', 15], ['p', 16], ['q', 17], ['r', 18],
  ['s', 19], ['t', 20], ['u', 21], ['v', 22], ['w', 23], ['x', 24],
  ['y', 25], ['z', 26]]);
  return str.split('').reduce((acc, elem) => {
    acc += map.get(elem);
    return acc;
  }, 0);
}                            