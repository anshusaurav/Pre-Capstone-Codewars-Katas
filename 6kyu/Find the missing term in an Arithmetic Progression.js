//Link: https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

var findMissing = function (list) {
    let sum = list.reduce((acc, elem) => {
        acc += elem;
        return acc;
    });
    let d = Math.min(list[2] - list[1], list[1] - list[0]);
    let apSum = ((list.length + 1) * (list[0] + list[list.length - 1])) / 2;
    return apSum - sum;
}