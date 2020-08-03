//Link: https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript


function formatWords(words) {
    if (!words)
        return '';
    words = words.filter(elem => elem.length > 0)
    if (words.length > 1) {
        return words.filter((elem, index) => index < words.length - 1).join(', ') + ' and ' + words[words.length - 1];
    }
    else if (words.length == 1) {
        return '' + words[0];
    }
    return '';
}