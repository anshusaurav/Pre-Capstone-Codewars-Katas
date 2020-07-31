//Link: https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  let queueArr = [];
  for (let i = 0; i < n; i++) {
    queueArr.push(0);
  }
  for (let j = 0; j < customers.length; j++) {
    queueArr[0] += customers[j];
    queueArr.sort((a, b) => a - b);
  }

  return queueArr[queueArr.length - 1];
}