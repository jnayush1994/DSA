/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // let firstList = headA;
    // let secondList = headB;
    // let mySet = new Set();

    // while(headB){
    //     mySet.add(headB);
    //     headB = headB.next;
    // }

    // while(headA){
    //     if(mySet.has(headA)) return headA;
    //     headA = headA.next;
    // }

    // return null;
    let pointerA = headA;
    let pointerB = headB;
    let counterA = 0;
    let counterB = 0;
    let difference = 0;
    let counter = 0;

    while (pointerA) {
        counterA++;
        pointerA = pointerA.next;
    }

    while (pointerB) {
        counterB++;
        pointerB = pointerB.next;
    }

    pointerA = headA;
    pointerB = headB;

    if (counterA > counterB) {
        difference = counterA - counterB;
        while (counter < difference) {
            counter++;
            pointerA = pointerA.next;
        }
    } else {
        difference = counterB - counterA;
        while (counter < difference) {
            counter++;
            pointerB = pointerB.next;
        }
    }

    while (pointerA) {
        if (pointerA === pointerB) {
            return pointerA;
        } else {
            pointerA = pointerA.next;
            pointerB = pointerB.next;
        }
    }

    return null;
};