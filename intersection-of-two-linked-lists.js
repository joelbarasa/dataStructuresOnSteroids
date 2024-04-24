/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    else {
        let currentA = headA;

        while (currentA) {
            let currentB = headB;
            while (currentB) {
                if (currentA === currentB) return currentA;
                currentB = currentB.next;
            }
            currentA = currentA.next;
        }
        return null;
    }
};

