### 浏览器和node.js事件循环的区别
1.主要区别是两个循环事件在处理异步事件的顺序是不同的 node中有微事件(micro event) Promise属于micro event 该异步事件的执行顺序和浏览器是不同的 但是node.js v11以上两者执行顺序就一样了