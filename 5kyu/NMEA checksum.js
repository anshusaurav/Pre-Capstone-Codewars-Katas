//Link: https://www.codewars.com/kata/54249c6bf132dcc661000495/train/javascript

function check(string) {
    const index = string.indexOf('*');
    const xor = string.slice(1, index).split('').reduce((acc, elem) => {
        acc ^= elem.charCodeAt();
        return acc;
    }, 0)
    const x = string.slice(string.indexOf('*') + 1).trim();
    if (isNaN(parseInt(x, 16)))
        return false;
    if (x[0] === '0')
        return false;
    return parseInt(x, 16) === xor;
}