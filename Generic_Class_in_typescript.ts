class Stack<T>{
    array:T[]
    constructor(){
        this.array=[];
    }
    push(x:T):void{
        this.array.push(x)
    }
    pop():void{
        this.array.pop();
    }
    top():T{
        return this.array[this.array.length-1];
    }
    display():void{
        console.log(this.array);
    }
}
const st=new Stack<number>();
st.push(1);
st.push(2);
st.display();
console.log(st.top());
st.pop();
st.display();
const stringstack=new Stack<string>();
stringstack.push("hi");
stringstack.push("bye");
stringstack.display();
console.log(stringstack.top());
stringstack.pop();
stringstack.display();
//we can pass multiple generic in class
class Stack<T,S>{
    array:T[]
    constructor(){
        this.array=[];
    }
    push(x:T):void{
        this.array.push(x)
    }
    pop():void{
        this.array.pop();
    }
    top():T{
        return this.array[this.array.length-1];
    }
    display():void{
        console.log(this.array);
    }
}

// suppose u want to keep second generic as optional 
class Stack<T,S=void>{
    array:T[]
    constructor(){
        this.array=[];
    }
    push(x:T):void{
        this.array.push(x)
    }
    pop():void{
        this.array.pop();
    }
    top():T{
        return this.array[this.array.length-1];
    }
    display():void{
        console.log(this.array);
    }
}
       //OR
class Stack<T,S={}>{
    array:T[]
    constructor(){
        this.array=[];
    }
    push(x:T):void{
        this.array.push(x)
    }
    pop():void{
        this.array.pop();
    }
    top():T{
        return this.array[this.array.length-1];
    }
    display():void{
        console.log(this.array);
    }
}


