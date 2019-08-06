import { NumericLiteral } from "@babel/types";

//交叉类型与联合类型
interface DogInterface{
    run():void
}
interface CatInterface{
    jump():void
}

let pet:DogInterface&CatInterface ={
    run(){},
    jump(){}
}

let a:number|string = 'a'

let b:'a'|'b'|'c'

let c:1|2|3
//数字联合类型
//对象联合类型


class Dog1 implements DogInterface {
    run(){}
    eat(){}
}

class Cat  implements CatInterface{
    jump(){}
    eat(){}
}

enum Master { Boy,Girl}

function getPet(master:Master){
    let pet = master === Master.Boy? new Dog1() : new Cat()
    pet.eat() 
    return pet
}

interface Square {
    kind:"square",
    size:number
}

interface Recttangle{
    king:"reactTangle",
    width:number
}