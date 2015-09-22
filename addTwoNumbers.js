// var l1, l2, l3;
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var flag = 0;
    var temp;
    if( (l1.val + l2.val) > 9 ){
        temp = new ListNode( l1.val + l2.val - 10);
        flag = 1;
    }else{
        temp = new ListNode( l1.val + l2.val );
    }
    var l3 = temp;
    while( l1.next !== null || l2.next !== null || flag === 1) {
        if( l1.next === null && l2.next === null) { // false false true
            temp.next = new ListNode(0 + flag);
            flag = 0;
        }else if( l1.next !== null && l2.next === null && flag !== 1 ){ //true false false
            // temp.next = l1.next;
            // return l3;
            temp.next = new ListNode(l1.next.val);
        }else if( l1.next === null && l2.next !== null && flag !== 1 ){ //false true false
            // temp.next = l2.next;
            // return l3;
            temp.next = new ListNode(l2.next.val);
        }else if( l1.next !== null && l2.next === null && flag === 1) { // true false true
            if( (l1.next.val + flag) > 9 ) {
                temp.next = new ListNode(l1.next.val + flag - 10);
            }else{
                temp.next = new ListNode(l1.next.val + flag );
                flag = 0;
            }
        }else if( l1.next=== null && l2.next !== null && flag === 1 ){ //false true true
            if( (l2.next.val + flag) > 9 ) {
                temp.next = new ListNode(l2.next.val + flag - 10);
            }else{
                temp.next = new ListNode(l2.next.val + flag );
                flag = 0;
            }            
        } 
        // else if (l1.next !== null && l2.next !== null && flag !== 1) {// true true false
        //     if( (l1.next.val + l2.next.val ) > 9 ) {
        //         temp.next = new ListNode(l1.next.val + l2.next.val + flag - 10 );
        //         flag = 1;
        //     }else{
        //         temp.next = new ListNode(l1.next.val + l2.next.val );
        //     }
        // }
        else { // true true false || true true true
            if( (l1.next.val + l2.next.val + flag) > 9 ) {
                temp.next = new ListNode(l1.next.val + l2.next.val + flag - 10 );
                flag = 1;
            }else{
                temp.next = new ListNode(l1.next.val + l2.next.val + flag );
                flag = 0;
            }
        }
        if( l1.next !== null) {
            l1 = l1.next;
        }
        if( l2.next !== null ) {
            l2 = l2.next;
        }
        if(temp.next !== null) {
            temp = temp.next;
        }
    }
    return l3;
};