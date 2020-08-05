//https://www.codewars.com/kata/58865bfb41e04464240000b0/train/javascript
function bitsWar(numbers) {
    let oddSum = 0, evenSum = 0;
    numbers.forEach(elem => {
        if (Math.abs(elem) % 2) {
            if (elem < 0) {
                oddSum -= countSetBits(-elem)
            }
            else
                oddSum += countSetBits(elem);
        }
        else {
            if (elem > 0) {
                evenSum += countSetBits(elem);
            }
            else {
                evenSum -= countSetBits(-elem);
            }
        }
    })
    //   console.log(numbers, oddSum, evenSum)
    return oddSum > evenSum ? 'odds win' : evenSum === oddSum ? 'tie' : 'evens win';
}
function countSetBits(originalNumber) {
    let setBitsCount = 0;
    let number = originalNumber;

    while (number) {
        // Add last bit of the number to the sum of set bits.
        setBitsCount += number & 1;

        // Shift number right by one bit to investigate other bits.
        number >>= 1;
    }

    return setBitsCount;
}