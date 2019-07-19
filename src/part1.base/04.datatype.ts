//原始类型
let bool:boolean = true;
let num:number|undefined|null=123;//联合类型
let str:string = "abc";
// str =123;

//数组类型
let arr1:number[] = [1,2,3];
let arr2:Array<number|string> = [1,2,3,4,"5"];

//元祖类型
let tuple:[number,string] = [0,"1"];
tuple.push(2);//可以添加 但是不能访问
// console.log(tuple[2]);+
//函数
let add =(x:number,y:number)=>x+y//ts的类型推断
let compute:(x:number,y:number)=> number;
compute =(a,b)=>a+b;

//对象
let obj:{x:number,y:number} = { x:1,y:2 };
obj.x=2;

//symbol唯一类型

let s1:symbol = Symbol();
let s2 = Symbol();
console.log(s1===s2)

//undefined 如果被赋值了undefined 就不能在赋值了
// unll 
let um:undefined = undefined;
let nu:null = null;
// nu =undefined;
num = undefined;
num = null;

//void 没有任何返回值的类型
let noResult =()=>{}

//any
let x
x =1
x =[]
x =()=>{}


//never 异常不会有返回值 死循环函数 




