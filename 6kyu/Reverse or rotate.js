//Link: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

function revrot(str, sz) {
    if (sz === 0 || str.length === 0)
        return "";
    if (sz > str.length)
        return "";
    let count = Math.floor(str.length / sz), i;
    let res = [];
    for (i = 0; i < count; i++) {
        res.push(str.slice(i * sz, sz + i * sz));
    }
    return res.map(elem => {
        if (getSumCubes(elem) % 2) {
            return rotateString(elem);
        }
        else {
            return elem.split('').reverse().join('');
        }
    }).join('');
}
function getSumCubes(str) {
    return str.split('').map(elem => +elem).reduce((acc, elem) => {
        acc += elem * elem * elem;
        return acc;
    }, 0);
}
function rotateString(str) {
    const tmp = str[0];
    return str.slice(1) + str[0];
}