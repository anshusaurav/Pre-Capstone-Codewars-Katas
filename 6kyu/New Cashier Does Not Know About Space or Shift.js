//Link: https://www.codewars.com/kata/5d23d89906f92a00267bb83d/


function getOrder(input) {
    const menuItems = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
    let cntArr = new Array(8).fill(0)
    let isDone = false;
    while (!isDone) {
        let index = 0;
        for (let i = 0; i < menuItems.length; i++) {
            if (input.startsWith(menuItems[i].toLowerCase())) {
                index = i;
            }
        }
        input = input.slice(menuItems[index].length);
        cntArr[index]++;
        if (input.length === 0)
            isDone = true;
    }
    const res = [];
    menuItems.forEach((menuItem, index) => res.push(...(new Array(cntArr[index]).fill(menuItem))));
    return res.join(' ');
}