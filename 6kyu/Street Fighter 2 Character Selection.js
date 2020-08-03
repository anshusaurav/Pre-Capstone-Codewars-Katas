//Link: https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/javascript

function streetFighterSelection(fighters, position, moves) {
    let x = position[0], y = position[1];
    let res = moves.map(move => {
        if (move === 'left') {
            if (x !== 0)
                x--;
            else
                x = fighters[0].length - 1;
            return [x, y]
        }
        if (move === 'right') {
            if (x !== fighters[0].length - 1)
                x++;
            else
                x = 0;
            return [x, y]
        }
        if (move === 'up') {
            if (y !== 0)
                y--;
            return [x, y]
        }
        if (move === 'down') {
            if (y !== fighters.length - 1)
                y++;
            return [x, y]

        }
    })
    return res.map(elem => fighters[elem[1]][elem[0]]);
}