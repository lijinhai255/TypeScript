class Dog {
     constructor(name:string){
    // protected constructor(name:string){//表示 类不能被实例化 只能被继承
    //    private constructor(name:string){//表示 既不能实例化  又不能继承
        // this.name = name
    }
    public name?:string = "dog"//初始化
    run(){}
    private pri(){}
    protected pro(){} //受保护属性 只能在类和子类中进行访问 不能在类的实例中进行访问
    readonly legs:number = 4//表示该属性 不能被更改 只读属性也要初始化和共有属性是一样的
    static food:string = "bones"//静态属性 不能通过子类来进行调用

}

console.log(Dog.prototype)

// console.log(Dog.food,11111111,dog.food)

let dog = new Dog("wangwangwang")
// dog.pri() //私有成员  在实例化对象中进行调用
// dog.pro()
class HuSky extends Dog {
    constructor(name:string,public color:string){
        super(name)
        this.color = color
        //在子类中调用 私有属性
        // this.pri()
        //在子类中调用保护属性
        this.pro()
    }
    // color:string
}

console.log(dog)
console.log(HuSky.food)

//类的成员修饰符
// class 