//Link: https://www.codewars.com/kata/536c6b8749aa8b3c2600029a/train/javascript

function sortString(string, ordering) {
    const res = string.split('').map((elem, index) => [elem, index]);
    return res.sort(function (a, b) {
        if (ordering.indexOf(a[0]) == -1 && ordering.indexOf(b[0]) == -1)
            return a[1] - b[1];
        else if (ordering.indexOf(b[0]) == -1)
            return -1;
        else if (ordering.indexOf(a[0]) == -1)
            return 1;
        else {
            return ordering.indexOf(a[0]) - ordering.indexOf(b[0]);
        }
    }).map(elem => elem[0]).join('');
}