import { VendorLonghandProperties } from "csstype";

interface List {
    id:number,
    name:string,
    age?:number
}

interface Result {
    data:List[]
}

function render(result:Result){
    result.data.forEach((value)=>{
        console.log(value.id,value.name)
        if(value.age){
            console.log(value.age)
        }
        value.id++
        // console.log(value.id,value.name)

    })
}
let result ={
    data:[
        {
            id:1,
            name:"A",
            sex:"男"
        },
        {
            id:2,
            name:"B"
        }
    ]
}
render(result)
// render({
//     data:[
//         {
//             id:1,
//             name:"A",
//             sex:"男"
//         },
//         {
//             id:2,
//             name:"B"
//         }
//     ]
// })
//解决报错的方法
//1   类型断言
// render({
//     data:[
//         {
//             id:1,
//             name:"A",
//             sex:"男"
//         },
//         {
//             id:2,
//             name:"B"
//         }
//     ]
// } as Result)
//2 定义类型
// render(<Result>{
//     data:[
//         {
//             id:1,
//             name:"A",
//             sex:"男"
//         },
//         {
//             id:2,
//             name:"B"
//         }
//     ]
// })
//签名 
interface List1{
    id:number,
    name:string,
    [x:string]:any
}

//定义数字 索引的接口
interface StringArray {
    [index:number]:string
}//表示 用任意的数字访问StringArray 得到一个数字
let charts:StringArray = ["a","b"];

interface Name {
    // [x:string]:string,
    [x:string]:any,
    // y:number
    [z:number]:number
}

//函数定义接口
let add1:(x:number,y:number)=>number
//接口定义函数
interface Add{
    (x:number,y:number):number
}
//类型别名
type add2 =(x:number,y:number)=>number


//实现具体函数
let add3:Add=(a,b)=>a+b

//混合类型
interface Lib{
    ():void;
    version:string;
    doSomething():void;
} 
function getLib(){
    let lib:Lib =(()=>{}) as Lib;
    lib.version = "1.0";
    lib.doSomething = ()=>{}
    return lib;

 }
let lib:Lib =(()=>{})as Lib 
lib.version = "1.0"
lib.doSomething = ()=>{}
let lib1 = getLib()
lib1()
let lib2 = getLib()
lib2.doSomething()
