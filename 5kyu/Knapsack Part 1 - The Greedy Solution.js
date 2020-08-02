var knapsack = function (capacity, items) {
    const itemsClone = items.map(item => {
        return [...item];
    })
    itemsClone.sort((a, b) => a[1] / a[0] - b[1] / b[0]);
    let res = new Array(items.length).fill(0);
    let cc = 0;
    let index = itemsClone.length - 1;
    while (cc < capacity) {
        if (index === -1)
            break;
        while (cc + itemsClone[index][0] <= capacity) {
            cc += itemsClone[index][0];
            res[index]++;
        }
        index--;
    }
    return items.map((elem, index) => {
        for (let i = 0; i < items.length; i++) {
            if (elem[0] === itemsClone[i][0] && elem[1] === itemsClone[i][1]) {
                return res[i];
            }
        }
    })
}