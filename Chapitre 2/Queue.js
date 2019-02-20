var Queue = /** @class */ (function () {
    function Queue() {
        this.arrayQueue = [];
    }
    //push(): Add items to the end of an array
    Queue.prototype.push = function (num) {
        this.arrayQueue.push(num);
    };
    //Remove an item from the beginning of an array
    Queue.prototype.pop = function () {
        return this.arrayQueue.shift();
    };
    Queue.prototype.tab = function () {
        return this.arrayQueue;
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.tab().map(function (elt, index) { console.log(index, '=>', elt); });
// affiche 
// 0 '=>' 1
// 1 '=>' 2
// 2 '=>' 3
// 3 '=>' 4
console.log(queue.pop()); // affiche 1
//pop(): Remove an item from the end of an array
//shift(): Remove an item from the beginning of an array
//unshift(): Add items to the beginning of an array
