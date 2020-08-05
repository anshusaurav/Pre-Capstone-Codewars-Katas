//Link: https://www.codewars.com/kata/591d56c8ff832ae47a000036

function brokenJigsaw(p) {
    const arr = p.map(elem => [elem.indexOf('O'), elem.lastIndexOf('O')]);

    let min = arr.reduce((acc, elem) => {
        if (elem[0] === -1)
            acc = 0;
        else if (acc > (elem[1] - elem[0] + 1))
            acc = elem[1] - elem[0] + 1;
        return acc;
    }, 100000)
    return arr.reduce((acc, elem) => {
        if (elem[0] !== -1) {
            if (elem[1] - elem[0] + 1 > min)
                acc += elem[1] - elem[0] - min + 1;
        }
        return acc;
    }, 0)
}

