
'use strict';

// Stack class with push, peek and pop menthods.
const _stackItems = new WeakMap();
class Stack {
    constructor () {
        _stackItems.set(this, []);
    }

    // Push method.
    push(item) {
        const items = _stackItems.get(this);
        items.push(item);
    }

    // Peek method.
    peek() {
        const items = _stackItems.get(this);
        if (items.length === 0) throw new Error('Stack is empty');
        console.log(items.slice(-1)[0]);
    }

    // Pop method.
    pop() {
        const items = _stackItems.get(this);
        if (items.length === 0) throw new Error('Stack is empty');
        return items.pop();
    }

    get count() {
        return _stackItems.get(this).length;
    }
}

const stack = new Stack();
console.log(stack);