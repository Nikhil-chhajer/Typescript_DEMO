// type pairofnumber=[number,number];
// function linearsearch(array:number[],x:number):pairofnumber{
//     for(let i:number=0;i<array.length;i++){
//         if(array[i]==x){
//             return [i,array[i]];
//         }
//     }
//     return [-1,-1] ;

// }
// const array:number[]=[1,2,3,4,5];
// const answer:pairofnumber=linearsearch(array,2);
// console.log(linearsearch(array,2));
// console.log(answer);

//generics in TypeScript
// function linearsearch<T>(array:T[],x:T):[number,T]{
//     for(let i:number=0;i<array.length;i++){
//         if(array[i]==x){
//             return [i,array[i]];
//         }
//     }
//     return [-1,x] ;

// }
// const array:number[]=[1,2,3,4,5];
// console.log(linearsearch(array,2));
// const stringarray:string[]=["hii","bye","hello","good"];
// console.log(linearsearch(stringarray,"bye"));

//we can pass multiple generics in single function 
function linearsearch<T,R>(array:T[],x:T,y:R):[number,T]{
    for(let i:number=0;i<array.length;i++){
        if(array[i]==x){
            return [i,array[i]];
        }
        console.log(y);
    }
    return [-1,x] ;

}
const array:number[]=[1,2,3,4,5];
 console.log(linearsearch(array,5,"hii"));
