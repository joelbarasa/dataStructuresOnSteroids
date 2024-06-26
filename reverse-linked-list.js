/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    else {
        let current = head, previous = null, trueCurrent;
        while (current) {
            trueCurrent = current.next;
            current.next = previous;
            previous = current;
            current = trueCurrent;
        }
        return previous;
    }
};
