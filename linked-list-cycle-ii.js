/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null || head.next === null) {
        return null;
    }
    else {
        let current = head;

        while (current) {
            if (current.visited === true) {
                console.log("Current Node: " + current);
                return current;
            }
            current.visited = true;
            current = current.next;
        }
    }
    return null;
};
