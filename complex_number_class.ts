class complex{
    private real :number
    private imaginary:number
    constructor(real:number,imaginary:number){
        this.real=real;
        this.imaginary=imaginary
    }
    display():void{
        console.log(`${this.real}+${this.imaginary}`);
    }
    add(c:complex):void{
        console.log(`${this.real}+${this.imaginary}`);
        this.real=this.real+c.real;
        this.imaginary=this.imaginary+c.imaginary;
    }
    multiply(c:complex):void{
        console.log(`${this.real}+${this.imaginary}`);
        this.real=this.real*c.real-this.imaginary*c.imaginary;
        this.imaginary=this.real*c.imaginary-this.imaginary*c.real;
    }
}

let c1:complex=new complex(10,20);
let c2:complex=new complex(2,3);
c1.display();
c2.display();
c1.add(c2);
c1.display();
c1.multiply(c2);
c1.display();

