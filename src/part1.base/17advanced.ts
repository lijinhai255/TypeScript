enum Type { Strong,week }

class Java {
    hellowJava(){
        console.log('hellow Java')
    }
    java:any
}

class JavaScript{
    hellowJavaScript(){
        console.log('hellow JavaScript')
    }
    javascript:any
}

function isJava(lang:Java|JavaScript):lang is Java{
    //类型
    return (lang as Java).hellowJava()!==undefined
}

function getLanguage(type:Type,x:string|number){
    let lang = type === Type.Strong? new Java(): new JavaScript()
    // if((lang as Java).hellowJava){
    //     (lang as Java).hellowJava()
    // }else{
    //     (lang as JavaScript).hellowJavaScript()
    // }

    //instance
    // if(lang instanceof Java){
    //     lang.hellowJava()
    // }else{
    //     lang.hellowJavaScript()
    // }
    //in
    // if('java' in lang){
    //     lang.hellowJava()
    // }else{
    //     lang.hellowJavaScript()
    // }
    
    //typeOf 类型保护
    // if(typeof x=== 'string'){
    //     x.length
    // }else{
    //     x.toFixed()
    // }
    if(isJava(lang)){
        lang.hellowJava()
    }else{
        lang.hellowJavaScript()
    }

    return lang
}

getLanguage(Type.Strong)