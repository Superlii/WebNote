call. apply. bind区别
---
共同点:

都是改变当前this的指向

call和apply区别

call接收的是参数列表 而apply接收的是参数数组(立即执行)

bind接收多个参数 第一个参数的this指向会指向调用bind()的对象或函数 例如
```js
var a = {
    b : function(){
        var func = function(){
            console.log(this.c);
        }
        func.bind(this)();
    },
    c : 'Hello!'
}
a.b();
```