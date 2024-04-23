/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null && list2 === null) {
        return null
    }
    else if (list1 === null) {
        return list2;
    }
    else if (list2 === null) {
        return list1;
    }
    else {
        let dummyNode = new ListNode();
        let current = dummyNode;

        while ((list1 !== null) && (list2 !== null)) {
            if (list1.val < list2.val) {
                current.next = new ListNode(list1.val);
                current = current.next;
                list1 = list1.next;
            }
            else {
                current.next = new ListNode(list2.val);
                current = current.next;
                list2 = list2.next;
            }
        }

        while (list1 !== null) {
            current.next = new ListNode(list1.val);
            current = current.next;
            list1 = list1.next;
        }

        while (list2 !== null) {
            current.next = new ListNode(list2.val);
            current = current.next;
            list2 = list2.next;
        }
        return dummyNode;
    }
};
