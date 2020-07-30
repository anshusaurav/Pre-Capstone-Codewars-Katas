//Link: https://www.codewars.com/kata/59d398bb86a6fdf100000031/solutions/javascript


function stringBreakers(n, string) {
  let str = string.replace(/\s+/g, '');
  console.log(str);
  let done = false;
  let res = [];
  let start = 0;
  while (start < str.length) {
    res.push(str.slice(start, n + start));
    start += n;

  }
  return res.join('\n');
}