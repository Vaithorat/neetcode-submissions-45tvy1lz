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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        let curr = head

        while(curr){
            let temp = curr.next //2
            curr.next = prev //pointing to null
            prev = curr // null is now head
            curr = temp // curr pointer shifted to 2
        }
        return prev
    }
}
