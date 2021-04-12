//深拷贝和浅拷贝区别和实现

// 简单来说 两个对象A和B 当B复制了A   修改A如果B跟着变的话 那就是浅拷贝 如果不变就是深拷贝

`for in`//实现浅拷贝 只复制一层


var simpleClone = function (obj)
{
var objClone = Aarray.isArray(obj) ? [] : {}
for(let i in obj){
    objClone[i] = obj[i]
}
return objClone
}
obj = {a:1,b:2, c:{d:3}}
var objClone = simpleClone(obj)
objClone.a = 2
console.log(obj,objClone)


// `Object.assign()`//方法

// //浅拷贝
// var obj = {a:1,b:2}
// var obj1 = Object.assign(obj)
// obj1.a = 2
// console.log(a,b) // a{1,2} b{1,2}

