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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) { return false }
        let nextSet = new Set();
        nextSet.add(head.val);

        let currentNode = head;
        while (currentNode) {
            if (nextSet.has(currentNode.next)) {
                return true;
            } else {
                nextSet.add(currentNode.next);
                currentNode = currentNode.next
            }
        }

        return false
    }
}
