// class Log<T>{
//         run(value:T){
//             console.log(value)
//             return value
//         }
// }

// // log<string[]>(['a','b'])
// // log(['a','b'])

// // type log = <T>(value:T)=>T

// // let MyLog:log =>log 

// interface log <T>{
//    (value:T):T
// }



// let log1 = new Log<number>()

// log1.run(1)

// let log2 = new Log()

// log2.run("11111")

// interface length{
//     length:number
// }

// function log<T extends length>(value:T):T{
//     console.log(value,value.length)
//     return value
// }

// log([11,23,2])

// // let MyLog:log<number> = log
// // console.log(MyLog)

// //泛型
// //函数重载
// //联合类型
// // any类型

// function MyLog<T>(value:T):T{
//     console.log(value)
//     return value
// }

// MyLog<string[]>(['a','b'])
// MyLog(['1','2'])

// //泛型函数类型
// type Log3 = <T>(value:T)=>T
// let MyLog1:Log3

// //泛型接口
// interface Log4<T = string>{
//     (value:T):T

// }

// let MyLog2:Log4<number> = MyLog


class Log<T>{
    run(value:T){
        console.log(value)
        return value
    }
}

let log1 = new Log<number>()
log1.run(1232)
let log2 = new Log();
log2.run('1111')

//定义接口 泛型约束
interface Length{
    length:number
}

function log<T extends Length>(value:T):T{
        console.log(value,value.length)
        return value
}





