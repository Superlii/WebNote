//深拷贝和浅拷贝区别和实现

// 简单来说 两个对象A和B 当B复制了A   修改A如果B跟着变的话 那就是浅拷贝 如果不变就是深拷贝

`for in`//实现浅拷贝 只复制一层

var simpleClone = function (obj)
{
var objClone = Array.isArray(obj) ? [] : {}
for(let i in obj){
    objClone[i] = obj[i]
}
return objClone
}
obj = {a:1,b:2, c:{d:3}}
var objClone = simpleClone(obj)
obj.a = 2
obj.c.d = 4
console.log(obj,objClone)


 //`Object.assign()`//方法

//浅拷贝
var obj = {a:1,b:2}
var obj1 = Object.assign(obj)
obj.a = 2
obj1.b = 3
console.log(obj,obj1) // a{2,2} b{2,2}

//深拷贝
var deepClone = function (a) {
    var aClone = Array.isArray(a) ? [] : {}
    if(a && typeof a === 'object'){
        for(key in obj){
        if(a.hasOwnProperty(key)){
          if(obj[key] && typeof obj[key] ==="object"){
             aClone[key] = deepClone(obj[key])
          } else {
            aClone[key] = obj[key]
          }
        }
    }
    }
    return aClone
}

var deepObj = {a:1,b:2, c:{d:3}}
var deepCloneObj = deepClone(deepObj)
deepCloneObj.a = 2
deepCloneObj.b = 4
console.log(deepObj,deepCloneObj)

