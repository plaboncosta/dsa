class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add First
    addFirst(data) {
        const node = new Node(data);

        node.next = this.head;

        if (this.head)
            this.head.prev = node;

        this.head = node;
        this.size++;
    }

    // Add Last
    addLast(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;

            node.prev = current;
        }

        this.size++;
    }

    // Insert at middle
    insertAt(data, index) {
        if (index < 0 || index > this.size) return;

        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            let count = 0;
            let before, after;

            while (count < index) {
                before = current;
                after = current.next;
                current = current.next;
                count++;
            }

            node.prev = before;
            before.next = node;

            node.next = after;

            if (after)
                after.prev = node
        }

        this.size++;
    }

    // Delete First
    deleteFirst() {
        if (!this.head) return;

        if (this.size === 1) {
            this.head = null;
        } else {
            let current = this.head;
            current = current.next;
            current.prev = null;

            this.head = current;
        }

        this.size--;
    }

    // Delete Last
    deleteLast() {
        if (!this.head) return;

        if (this.size === 1) {
            this.head = null;
        } else {
            let current = this.head;
            let previous;

            while (current.next) {
                previous = current;
                current = current.next;
            }

            previous.next = null;
        }

        this.size--;
    }

    // Delete at
    deleteAt(index){
        if (index < 0 || index >= this.size) return;

        // if(){

        // }
    }

    // Print List
    printList() {
        let current = this.head;
        let last;

        if (!this.head) return;

        console.log('ASC ORDER');
        console.log('------------');

        while (current) {
            console.log(current.data);
            last = current;
            current = current.next;
        }

        console.log('DSC ORDER');
        console.log('------------');

        while (last) {
            console.log(last.data);
            last = last.prev;
        }

        console.log(this.size, '=> Size');
    }
}

const dll = new DublyLinkedList();
dll.insertAt(100, 0);
dll.insertAt(200, 1);
dll.insertAt(300, 2);
dll.insertAt(400, 3);

dll.deleteLast();
dll.deleteLast();


dll.printList();

// console.log('================');

// console.log(dll.head, 'dll.head');