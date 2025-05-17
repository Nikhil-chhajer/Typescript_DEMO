class node<T>{
    data:T;
    next:node<T>|null;
    constructor(data:T){
        this.data=data;
        this.next=null;
    }
}
class linkedlist<T>{
    head:node<T>|null;
    constructor(){
        this.head=null
    }
    display():void{
        let temp:node<T>|null=this.head;
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next;
        }
    }
    addathead(data:T):void{
        if(this.head==null){
            this.head=new node(data);
            return;
        }
        let newnode:node<T>=new node(data);
        newnode.next=this.head;
        this.head=newnode;
    }
}
let numll=new linkedlist<number>();
numll.addathead(1);
numll.addathead(3);
numll.display();
let stringll=new linkedlist<string>();
stringll.addathead("hii");
stringll.addathead("Bye");
stringll.display();


