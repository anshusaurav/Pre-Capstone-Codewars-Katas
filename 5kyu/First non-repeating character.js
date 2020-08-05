//Link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
    let m = new Map();
    s.split('').forEach(elem => {
        if (m.has(elem.toLowerCase())) {
            m.set(elem.toLowerCase(), m.get(elem.toLowerCase()) + 1)
        }
        else
            m.set(elem.toLowerCase(), 1);
    })
    let arr = [...m.entries()];
    let ind = 0;
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] == 1) {
            res = arr[i][0];
            break;
        }
    }
    if (s.indexOf(res.toLowerCase()) == -1)
        return res.toUpperCase();
    return res;
}