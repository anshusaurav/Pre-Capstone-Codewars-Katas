//Link: https://www.codewars.com/kata/586538146b56991861000293/train/javascript

function to_nato(words) {
    let m = new Map([['a', 'Alfa'], ['b', 'Bravo'], ['c', 'Charlie'], ['d', 'Delta'], ['e', 'Echo'],
    ['f', 'Foxtrot'], ['g', 'Golf'], ['h', 'Hotel'], ['i', 'India'], ['j', 'Juliett'],
    ['k', 'Kilo'], ['l', 'Lima'], ['m', 'Mike'], ['n', 'November'], ['o', 'Oscar'],
    ['p', 'Papa'], ['q', 'Quebec'], ['r', 'Romeo'], ['s', 'Sierra'], ['t', 'Tango'],
    ['u', 'Uniform'], ['v', 'Victor'], ['w', 'Whiskey'], ['x', 'Xray'],
    ['y', 'Yankee'], ['z', 'Zulu']]);

    words = words.replace(/\s/g, '');

    return words.split('').map(elem => {
        if (m.has(elem.toLowerCase())) {

            return m.get(elem.toLowerCase());
        }
        else
            return elem;
    }).join(' ');
}