确定数据类型的几种方式
---
1.typeof

该方法一般是是确定基本数据(String Number Boolean Null Undefine BigInt Symbol)的数据类型

typeof 目前能返回string，number，boolean，symbol，bigint，unfined，object，function这八种判断类型

#### 注意 typeof null 返回Object

2.instanceof

一般用来判断引用类型数据(Object Function Array Data RegExp)的类型

原理:只要左边变量的prototype在右边的原型链上即可 instanceof在查找过程中会遍历原型链 直到找到右边变量(类或构造函数)的prototype 找不到返回false 反之返回true

```js
function F () {}
var f = new F()
f.__proto__ instanceof F.prototype //true
```

3.constructor

当一个函数被定义时 JS引擎会为函数添加prototype 并添加constructor 并让其指向函数的引用

如果f是该函数的实例 那么该函数原型上的constrcutor就会传递到实例上因此
```js
function F () {}
var f = new F()
f.constructor = F
```

4.Object.prototype.toString.call()
```js
let arr = [1,2]
//toString是Object原型方法 Array Function 等类型作为Object实例 都重写了toString方法 不同对象类型调用的是重写之后的 toString方法 而不是Object是的原型方法
Object.prototype.toString.call(arr) // [object Array]
```