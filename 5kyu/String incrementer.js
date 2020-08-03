//Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/

function incrementString(strng) {
    let last = getFirstNum(strng);
    let str = strng.slice(0, last), number = strng.slice(last);
    console.log(str, number)
    if (last === strng.length) {
        return str + '1';
    }
    else {
        let l = last;
        console.log(l, last);
        str = strng.slice(0, l);
        number = strng.slice(l);
        let num = +number;
        num++;
        return str + minLength(num, number.length);
    }
}

function getFirstNum(strng) {
    let last = strng.length, i;
    for (let i = 0; i < strng.length; i++) {
        console.log(isNaN(strng[i]));
        if (isNaN(strng[i])) {
        }
        else {
            return i;
        }
    }
    return last;
}
function minLength(n, len) {
    if ((n + '').length < len)
        return '0'.repeat(len - (n + '').length) + (n + '');
    return n + '';
}