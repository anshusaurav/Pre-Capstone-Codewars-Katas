//Link: https://www.codewars.com/kata/541103f0a0e736c8e40011d5
function off(n) {
  console.log(n);
  let arr = [];
  for (let i = 1; ; i++) {
    let x = i * i;
    if (x > 1000)
      break;
    arr.push(x);
  }
  return arr.filter(elem => elem <= n);

}