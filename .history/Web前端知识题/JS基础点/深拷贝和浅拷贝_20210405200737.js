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
console.log(obj,objClone)


 //`Object.assign()`//方法

//浅拷贝
var obj = {a:1,b:2}
var obj1 = Object.assign(obj)
obj.a = 2
obj1.b = 3
console.log(obj,obj1) // a{2,2} b{2,2}

//深拷贝
var deepClone = function (obj) {
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

var deepObj = {a:1,b:2, c:{d:3,e:{f:4}}}
var a= [1,2,3,4]
var deepCloneObj = deepClone(deepObj)
deepCloneObj.c.e.f = 5
console.log(deepObj,deepCloneObj)

for (var i = 0; i < 3; i++) {

    console.log(i);
  }

