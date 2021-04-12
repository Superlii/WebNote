Vue双向绑定原理
---
双向绑定实现过程

数据变化更新视图: (监听器Observer)利用Object.defineProperty()的get set函数更改数据 读取和监听 如果数据改变通知watch进行对页面的重新渲染

视图变化更新数据: view通过事件监听 通过target.value拿到更新后的值赋给data

vue双向数据绑定是通过数据劫持结合发布者-订阅者模式实现的  数据和视图同步

核心: Object.defineProperty()

(1)Object.defineProperty(obj, prop, descriptor) 第一个参数是操作对象 第二个参数是要定义或修改的属性 第三个参数是函数方法

