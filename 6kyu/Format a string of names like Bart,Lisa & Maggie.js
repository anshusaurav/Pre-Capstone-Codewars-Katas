//Link: https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

function list(names) {
    if (names.length > 1) {
        return names.map(elem => elem.name).filter((elem, index) => index < names.length - 1).join(', ') + ' & ' + names[names.length - 1].name;
    }
    else if (names.length == 1) {
        return '' + names[0].name;
    }
    return '';
}