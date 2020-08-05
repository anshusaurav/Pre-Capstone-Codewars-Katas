//Link: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count(string) {
    // The function code should be here
    let m = new Map();
    string.split('').forEach(elem => {
        if (m.has(elem)) {
            m.set(elem, m.get(elem) + 1);
        }
        else
            m.set(elem, 1);
    })
    let arr = [...m.entries()];
    return arr.reduce((acc, elem) => {
        acc[elem[0]] = elem[1];
        return acc;
    }, {});
    console.log(arr);
}