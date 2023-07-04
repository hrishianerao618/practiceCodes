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
    int l1Count = 0;
    int l2Count = 0;

    public ListNode convertStringtoLL( String str) {
        ListNode res=new ListNode(-1);
        ListNode m = res;
        for (int i = 0; i < str.length(); i++) {
            m.next= new ListNode(Integer.parseInt(String.valueOf(str.charAt(i))));
            m = m.next;
           }
           
        return res.next;
    }
    public ListNode sumLL(ListNode l1, ListNode l2) {
        ListNode result = new ListNode(0);
        String x = new String();
        int diff =0;
        int units=0;
        int tens=0;
        if(l1Count> l2Count){
            diff = l1Count- l2Count;
        }
        else{  
            diff = l2Count- l1Count;
        }

        while(l1!=null && l2!=null){
            int sum = l1.val+l2.val+tens;
            if(sum >=0 && sum<=9){
                units = sum;
                tens =0;
             }
            else{
                tens = sum/10;
                units = sum%10;
            }
           x = x.concat(Integer.toString(units));
           l1 =l1.next;
           l2=l2.next;
           
        }
     
        while(l1!=null){
                int sum = l1.val + tens;
                 if(sum >=0 && sum<=9){
                      units = sum;
                      tens =0;
                    }
                 else{
                     tens = sum/10;
                     units = sum%10;

                 }
                x = x.concat( Integer.toString(units));
                l1= l1.next;
        }
        while(l2!=null){
            int sum = l2.val + tens;
                 if(sum >=0 && sum<=9){
                      units = sum;
                      tens =0;
                    }
                 else{
                     tens = sum/10;
                     units = sum%10;
                 }
                x = x.concat( Integer.toString(units));
                l2= l2.next;
        }
        if(tens!=0)
            x = x.concat( Integer.toString(tens));
        return convertStringtoLL(x);
        
    }
  
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode p=l1;
        ListNode q=l2;
        ListNode result = new ListNode();
        while(l1 !=null){
         l1Count ++;
         l1 = l1.next;
         }   
         l1=p;
      while(l2 !=null){
         l2Count ++;
         l2 = l2.next;
         } 
         l2=q;  

        result = sumLL(l1,l2);
        return result;
    }
}
