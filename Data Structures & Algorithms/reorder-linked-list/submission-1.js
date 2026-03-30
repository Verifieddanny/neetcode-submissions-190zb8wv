/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
//[1,2,3,4,5,6,7]
// 1-> 7, 7 -> 2, 2 -> 6, 6 -> 3, 3 -> 5, 5 -> 4 
// 1 -> 7 -> 2 -> 6 -> 3 -> 5 -> 4 -> null
class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head) {
            return;
        }

        let nodes = [];

        let current = head;
        while (current) {
            nodes.push(current);
            current = current.next;
        }

        let i = 0;
        let j = nodes.length - 1;

        while(i < j){
            nodes[i].next = nodes[j];
            i++;

            nodes[j].next = nodes[i];
            j--;
        }

        nodes[i].next = null
    }
}
