/**
 * l1 = [2, 4, 3]
 * l2 = [5, 6, 4]
 * echo:708 [7, 0, 8]
 * 
 * function ListNode(val, next) {
 *      this.val = (val === undefined ? 0 : val)
 *      this.next = (next === undefined ? null : next)
 * }
 */

const addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;

    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;

        // 求和
        const sum = n1 + n2 + carry;

        // 如果还没有ROOT
        if (!head) {
            // 绑定
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }

        carry = Math.floor(sum / 10);

        if (l1) {
            l1 = l1.next
        }

        if (l2) {
            l2 = l2.next
        }

        if (carry > 0) {
            tail.next = new ListNode(carry);
        }
    }

    return head;
}