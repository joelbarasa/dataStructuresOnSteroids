/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.items = new Array();
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.items.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.items.length === 0) {
        return -1;
    }
    else {
        this.items.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.items.length === 0) {
        return -1;
    }
    else {
        return this.items[this.items.length - 1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return Math.min(...this.items);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
