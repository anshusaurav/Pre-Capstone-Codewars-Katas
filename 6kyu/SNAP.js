//Link: https://www.codewars.com/kata/5b49cc5a578c6ab6b200004c/

function snap(flashPile, turtlePile) {
    let gameEnds = false;
    let middlePile = [];
    let res = 0;
    while (!gameEnds) {
        const fC = flashPile.shift();
        middlePile.push(fC);
        let isContinue = false;
        if (isSnap(middlePile)) {
            res++;
            flashPile.push(...middlePile);
            middlePile = [];
            isContinue = true;
        }
        if (isGameOver(flashPile, turtlePile))
            gameEnds = true;
        if (!isContinue) {
            const tC = turtlePile.shift();
            if (turtlePile.length === 0)
                gameEnds = true;
            middlePile.push(tC);
            if (isSnap(middlePile)) {
                res++;
                flashPile.push(...middlePile);
                middlePile = [];
            }
            if (isGameOver(flashPile, turtlePile))
                gameEnds = true;
        }
    }
    return res;
}

function isSnap(middlePile) {
    const len = middlePile.length;
    if (len < 2)
        return false;
    if (middlePile[len - 2] === middlePile[len - 1]) {
        return true;
    }
    return false;
}
function isGameOver(flashPile, turtlePile) {
    if (flashPile.length === 52 || (flashPile.length === 0 && turtlePile.length === 0))
        return true;
    return false;
}