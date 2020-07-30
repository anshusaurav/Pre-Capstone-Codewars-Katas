//Link: https://www.codewars.com/kata/583601518d3b9b8d3b0000c9/train/javascript

function alignRight(text, width) {
    const arr = text.split(' ');
    let tmp = '';
    let res = arr.reduce((acc, elem, index) => {
        if (tmp.length === 0) {
            tmp += elem;
        }
        else {
            if (tmp.length + elem.length + 1 > width) {
                acc.push(getRightAligned(tmp, width));
                tmp = '';
                tmp += elem;

            }
            else {
                if (tmp === '')
                    tmp += (elem);
                else
                    tmp += (' ' + elem);
            }
        }
        if (index === arr.length - 1) {
            if (tmp !== '')
                acc.push(getRightAligned(tmp, width));
        }
        return acc;
    }, []);
    return res.join('\n');
}

function getRightAligned(str, len) {
    return ' '.repeat(len - str.length) + str;
}