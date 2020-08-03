//Link: https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/javascript   

function loop_size(node) {
    let slow = node;
    let fast = node.next
    while (slow != fast) {
        fast = fast.next.next
        slow = slow.next
    }
    slow = slow.next
    let res = 1;
    while (slow != fast) {
        res += 1
        slow = slow.next
    }
    return res;
}