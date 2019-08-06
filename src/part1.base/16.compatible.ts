import { type } from "os";
import { listenerCount } from "cluster";

// /*
//  * X（目标类型） = Y（源类型），X 兼容 Y
//  */

// let s: string = 'a'
// // str = null

// // 接口兼容性
// interface X {
//     a: any;
//     b: any;
// }
// interface Y {
//     a: any;
//     b: any;
//     c: any;
// }
// let xx: X = {a: 1, b: 2}
// let y: Y = {a: 1, b: 2, c: 3}
// x = y
// // y= x


// //函数兼容性

// type Handler = (a:number,b:number) =>void

// function hof(handler:Handler){
//     return handler
// }

// //参数个数

// let handler1 =(a:number) =>{}
// hof(handler1)
// let handler2 =(a:number,b:number,c:number)=>{}
// // hof(handler2)

// //可选参数 和剩余参数
// let a1 =(p1:number,p2:number)=>{}
// let b1=(p1?:number,p2?:number)=>{}
// let c1 =(...args:number[])=>{}

// a1= b1
// a1 =c1
// // b1 = c1
// // b1 =a1
// c1 = a1
// c1 = b1

// //参数类型
// let Handler3 =(a:string) =>{}

// // hof(Handler3)

// interface Point3D{
//     x:number;
//     y:number;
//     z:number;
// }

// interface Point2D{
//     x:number;
//     y:number;
// }
// let p3d = (point:Point3D)=>{}
// let p2d = (point:Point2D)=>{}

// // let 


// // p2d = p3d
// p3d = p2d//成员多的 兼容少的


// //接口类型兼容 成员少的兼容成员多

//函数兼容

type Handler =(a:number,b:number)=>void

function hof(handler: Handler){
    return handler
}


//参数个数
let handler1 = (a:number)=>{}
hof(handler1)
let handler2 =(a:number,b:number,c:number)=>{}
// hof(handler2)

//剩余参数 可选参数
let a = (p1:number,p2:number) =>{}

let b = (p1?:number,p2?:number)=>{}

let c =(...args:number[])=>{}

a=b
a=c
// b=a

//参数类型
interface Point2D {
    x:string,
    y:string
}
interface Point3D {
    x:string,
    y:string,
    z:string
}

let p2d =(point:Point2D) =>{}

let p3d = (point:Point3D) =>{}

p3d = p2d
//参数夺得兼容参数少的

// p2d = p3d


//返回值类型
let f=()=>{{name:'Alice'}}

let g=()=>({name:'lijinhai',location:"Beijing" })

f=g

//枚举类型
enum Fruit { Apple,Banana }
enum Color {Red,Yellow}

// let fruit = Fruit.Apple = 3;
// let no: number = Fruit.Apple;
//类的兼容性
class A{
    constructor(p:number,q:number){
    
    }
    id:number = 1
    private name:string = ''
}
class B{
    static s =1
    constructor(p:number){}
    id:number = 2
    private name:string = ''
}
let aa =new A(1,2);
let bb = new B(1)
//只有父类和子类之间可以兼容
// aa = bb
// bb = aa
class C extends A{}
let cc = new C(1,2)
aa = cc
cc =aa 

//泛型兼容性
interface Empty<T>{
    // value:T
}

let obj1:Empty<number> = {}
let obj2:Empty<string> = {}

obj1 = obj2 
obj2 = obj1 


