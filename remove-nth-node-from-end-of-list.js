/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let index = getIndex(head, n);
    console.log(index);
    if (index < 0) {
        return head;
    }
    else {
        let iterator = 0, previous = null;
        let current = head;
        while (iterator < index) {
            previous = current;
            current = current.next;
            iterator++;
        }
        if (previous === null) {
            head = head.next;
        }
        else {
            previous.next = current.next;
        }
        return head;
    }
};

var getIndex = function (head, n) {
    if (head === null || head.next === null) {
        return 0;
    }
    else {
        let current = head;
        let size = 0;
        while (current) {
            size++;
            current = current.next;
        }
        return (size - n);
    }
};

// Logic
// Iterate to get size
// Iterate from 0 until index-1
// and delete this value
// return head
