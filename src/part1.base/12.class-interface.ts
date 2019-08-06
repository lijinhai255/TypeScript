interface Human{
    // new (name:string):void
    name:String;
    eat():void;
}

class Asian  implements Human{
    constructor(name:string){
        this.name = name;
    }
    name:string
    eat(){}
    sleep(){}
}

interface Man extends Human {
    run():void
}
interface Child{
    cry():void
}

interface Boy extends Man,Child{}

let boy:Boy={
    name:"",
    run(){},
    eat(){},
    cry(){}
}

class Auto{
    state= 1
    // private state2 = 0
}
interface AutoInterFace extends Auto{

}
class C implements AutoInterFace {
    state = 1
}

class Bus extends Auto implements AutoInterFace{
    
}