import { number, func } from "prop-types";

//函数的定义
function add1(x:number,y:number){
    return x+y
}

let add2:(x:number,y:number)=> number

let add3=( x:number,y:number )=> number

interface add4 {
    (x:number,y:number):number
}
//函数的参数做了限制
console.log(add1(1,2))

//可选参数
function add5(x:number,y?:number){
    return y? x+y: x
}
console.log(add5(1),"可选参数")

//默认值
function add6(x:number,y=0,z:number,q=1){
    return x+y+z+q
}
console.log(add6(1,undefined,3),"默认值")

function add7(x:number,...rest:number[]){
    return x + rest.reduce((pre,cur)=>pre+cur)
}
console.log(add7(1,2,3,4,5))

//函数重载 名称形同  参数不同  增加函数的可读性
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join('');
    }
}
console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))

