function goodVsEvil(good, evil) {
    const gPoint = [1, 2, 3, 3, 4, 10];
    const ePoint = [1, 2, 2, 2, 3, 5, 10];
    const gArr = good.split(' ').map(elem => +elem);
    const eArr = evil.split(' ').map(elem => +elem);
    const gScore = gArr.reduce((acc, elem, index) => {
        acc += elem * gPoint[index];
        return acc;
    }, 0);
    const eScore = eArr.reduce((acc, elem, index) => {
        acc += elem * ePoint[index];
        return acc;
    }, 0);
    if (gScore > eScore) {
        return 'Battle Result: Good triumphs over Evil'
    }
    else if (eScore > gScore) {
        return 'Battle Result: Evil eradicates all trace of Good'
    }
    return 'Battle Result: No victor on this battle field'

}