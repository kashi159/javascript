
class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length-1];
        return lastItem;
    }

    delete(index) {
        const lastItem = this.data[index];
        this.shiftItems(index);
        return lastItem;
    }

    shiftItems(index){
        for(let i = index; i< this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

let array = new MyArray();
array.push(1)
array.push(2)
array.push(3)
array.push(4)
array.push(5)
// array.delete(2)
array.pop()

console.log(array)