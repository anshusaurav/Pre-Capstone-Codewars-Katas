//Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
    return str.split(' ').map(elem => {
        if (hasOnlySpecialCharater(elem))
            return elem;
        return elem.slice(1) + elem[0] + 'ay';
    }).join(' ');
}

function hasOnlySpecialCharater(val) {
    var pattern = /^[^a-zA-Z0-9]+$/;
    return (pattern.test(val));
}           