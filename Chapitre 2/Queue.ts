class Queue<T> {

    private arrayQueue: Array<T> = [];

    //push(): Add items to the end of an array
    push(num : T){
        this.arrayQueue.push(num);
    }
    //Remove an item from the beginning of an array
    pop(){
        if(this.arrayQueue)
            return this.arrayQueue.shift();
        throw "empty queue";
    }

    tab(): Array<T>{
        return this.arrayQueue;
    }
}
let queue = new Queue<number>();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

queue.tab().map((elt, index) => { console.log(index,'=>', elt)});
// affiche 
// 0 '=>' 1
// 1 '=>' 2
// 2 '=>' 3
// 3 '=>' 4

console.log(queue.pop()); // affiche 1

//pop(): Remove an item from the end of an array
//shift(): Remove an item from the beginning of an array
//unshift(): Add items to the beginning of an array
