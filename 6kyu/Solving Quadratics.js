https://www.codewars.com/kata/53d8aea2e584dd9e67000ae6/train/javascript

function solveQuadratic(a, b, c) {
    if (determinant(a, b, c) < 0) {
        return undefined;
    }
    else {

        if (a == 0) {
            if (b == 0)
                return undefined;
            else
                return [-c / b];
            return undefined;
        }

        if (determinant(a, b, c) == 0)
            return [(-b) / (2 * a)];
        if (c == 0) {
            return [(-b - b) / 2 * a, 0]
        }
        const d = Math.sqrt(determinant(a, b, c))
        return [(-b - d) / (2 * a), (-b + d) / (2 * a)]
    }
}

function determinant(a, b, c) {
    return b * b - 4 * a * c;
}