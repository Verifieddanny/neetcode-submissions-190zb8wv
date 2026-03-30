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
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    let l1Node = [];
    let l2Node = [];

    let resultingNodes = [];

    let l1Current = l1;
    let l2Current = l2;

    while (l1Current) {
      l1Node.push(l1Current.val);

      l1Current = l1Current.next;
    }

    while (l2Current) {
      l2Node.push(l2Current.val);
      l2Current = l2Current.next;

    }

    l1Node.reverse();
    l2Node.reverse();

    let sum = BigInt(l1Node.join("")) + BigInt(l2Node.join(""));

    resultingNodes = sum.toString().split("").reverse();

    const head = new ListNode(Number(resultingNodes[0]));

    let current = head

    for (let i = 1; i < resultingNodes.length; i++) {

      const node = new ListNode(Number(resultingNodes[i]));

      current.next = node;
      current = node;
    }

    return head
  }
}
