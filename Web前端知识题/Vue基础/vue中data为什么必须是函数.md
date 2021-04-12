vue中data为什么必须是函数
---
为了让组件有自己的作用域 必须定义自己的私有属性(data)
因为当data是个变量的话
```js
component  = function(){
data:{a:1}

component  = function(){
data: function(){return {}}
} 
此时data将不被作为私有变量 一方面会对外暴露 另一方面是它的指向是{a:1}的引用 再重复创建键组件的时候 component的data都同时指向一个引用 会造成变量相互引用的影响
```