/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) {
        return head;
    }
    else {
        let current = head;
        let previous = null;
        while (current) {
            if (current.val === val) {
                if (previous === null) {
                    head = head.next;
                    current = current.next;
                }
                else {
                    previous.next = current.next;
                    current = current.next;
                }
            }
            else {
                previous = current;
                current = current.next;
            }
        }       
        return head;
    }
};
