/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    int count =0;
    ListNode q;
    public ListNode middleNode(ListNode head) {
        q=head;
        int i =0;
        while (q!=null){
            q = q.next ;
            count++;
        }
        System.out.print(count);
        while (head!=null){
            if(count==1)
                return head;
            if(i== count/2)    
                return head;
            i++;
            head = head.next;
        }
        return null;
    }
}
