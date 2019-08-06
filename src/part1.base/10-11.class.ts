

//抽象类
abstract class Animal{
    eat(){
        console.log("eat")
    }
    abstract sleep():void

}
// let animal = new Animal()

import { runInContext } from "vm";

class Dog extends Animal  {
    constructor(name:string){
        super()
        this.name = name 
    }
    name:string
    run(){}
    sleep(){
        console.log("dog sleep")
    }
}

let dog = new Dog("wangwang11")
dog.eat()
console.log(dog)

//ts 中的多态
class Cat extends Animal{
    sleep(){
        console.log(" Cat sleep")
    }
}
let cat = new Cat()

let animal:Animal[] = [dog,cat]

animal.forEach((i)=>{
    i.sleep()
})

//类的成员方法 可以返回this
class WorkFlow {
    sleep(){
        return this
    }
    sleep2(){
        return this
    }
}

class MyWork extends WorkFlow{
    next(){
        return this;
    }
}

new MyWork().next().sleep().next()

console.log(new WorkFlow().sleep().sleep2())