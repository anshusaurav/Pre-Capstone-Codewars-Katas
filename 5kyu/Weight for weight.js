function orderWeight(strng) {
    const res = strng.trim('').split(' ').map((elem, index) => [elem, index]);
    return res.sort((a, b) => {
        if (getVal(a[0]) < getVal(b[0]))
            return -1;
        else if (getVal(a[0]) > getVal(b[0]))
            return 1;
        else {
            if (a[0] < b[0])
                return -1;
            else if (a[0] > b[0])
                return 1;

        }
    }).map(elem => elem[0]).join(' ');
}
function getVal(str) {
    return str.split('').map(elem => +elem).reduce((acc, elem) => acc += elem);
}