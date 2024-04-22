/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null || head.next === null){
        return false;
    }
    else{
        let current = head;
        while(current){
            if(current.visited === true){
                return true;
            }
            current.visited = true;
            current = current.next;
        }
        return false;
    }
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // Use two pointer approach - hare and tortoise algorithm
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        // Found a cycle
        if (slow === fast) {
            return true
        }

    }
    return false;
};

