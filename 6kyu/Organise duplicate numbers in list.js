//Link: https://www.codewars.com/kata/5884b6550785f7c58f000047/train/javascript

function group(arr) {
  let res = [];
  let resCnt = [];
  arr.forEach(elem => {
    if (res.includes(elem)) {
      const index = res.indexOf(elem);
      resCnt[index]++;
    }
    else {
      res.push(elem);
      resCnt.push(1);
    }
  })
  return res.map((elem, index) => {
    let tmp = new Array(resCnt[index]).fill(elem);
    return tmp;
  })

}