原生JS实现事件绑定
---
1.通过dom元素绑定事件
```html
 <div id="btn" onclick="clickone()"></div> //直接在DOM里绑定事件
2 <script>
3 　　　　function clickone(){ alert("hello"); }
4 </script>
```
2.通过JS代码中绑定事件
```html
<div id="btn"></div>
2 <script>
3 　　document.getElementById("btn").onclick = function（）{ alert("hello"); } //脚本里面绑定
4 </script>
```

3.通过绑定事件监听函数(`addEventListener()`)
```html
<div id="btn"></div>
<script>
　document.getElementById("btn").addeventlistener("click",clickone,false); //通过侦听事件处理相应的函数， 第三个参数默认为false 是冒泡事件 反之为捕获
function clickone(){ alert("hello"); }
```

