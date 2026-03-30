/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let nodes = [];
        let current = head;
        while (current) {
            nodes.push(current)
            current = current.next;
        }

        let indexToBeRemoved = nodes.length - n

        if (indexToBeRemoved === 0) {
            head = nodes[indexToBeRemoved + 1] ? nodes[indexToBeRemoved + 1] : null
        } else {
            nodes[indexToBeRemoved - 1].next = nodes[indexToBeRemoved + 1] ? nodes[indexToBeRemoved + 1] : null

        }


        return head
    }
}
