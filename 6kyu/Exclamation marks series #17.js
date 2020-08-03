//Link: https://www.codewars.com/kata/57fb44a12b53146fe1000136/train/javascript

function balance(left, right) {
    if (2 * numExclamation(left) + 3 * numQuestion(left) > 2 * numExclamation(right) + 3 * numQuestion(right))
        return 'Left';
    else if (2 * numExclamation(left) + 3 * numQuestion(left) < 2 * numExclamation(right) + 3 * numQuestion(right))
        return 'Right';
    else
        return 'Balance'
}

function numQuestion(str) {
    return str.split('').filter(e => e === '?').length;
}
function numExclamation(str) {
    return str.split('').filter(e => e === '!').length;
}