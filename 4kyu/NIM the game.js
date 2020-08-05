//Link: https://www.codewars.com/kata/54120de842dff35232000195/

function chooseMove(state) {

    if (calcSum(state) === 0) {

    }
    else {
        for (let i = 0; i < state.length; i++) {
            console.log(calcSum(state), state[i], calcSum ^ state[i]);
            if ((calcSum(state) ^ state[i]) < state[i]) {
                let tmp = state[i];
                state[i] = calcSum(state) ^ state[i];
                return [i, tmp - state[i]];
            }
        }
    }
}

function calcSum(state) {
    return state.reduce((acc, elem) => {
        acc = acc ^ elem;
        return acc;
    })
}