/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(head === null) return null;
       let node = head, prev = null;
       while(node) 
       {
           if(node.val === val) 
           {
               if(prev === null)
               {
                   head = head.next;
                   if(head === null) return null;
               }
               else 
               {
                   prev.next = node.next;
               }
               
           }
           else
           {
               prev = node
           }
           node = node.next;
       }
       return head;
       
   };