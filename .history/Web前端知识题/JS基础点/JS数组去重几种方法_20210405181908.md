JS数组去重几种方法
---
### ES6 new Set()去重
```js
function (arr){
    return Array.from(new Set(arr)) // [...new Set(arr)]
}
```

### For 循环嵌套for循环 用splice()截断重复元素 返回新数组
```js
function (arr){
   for(var i =0; i < arr.length;++1){
       for(var j = i+ 1;j<arr.length;++j){
           if(arr[i] === arr[j]){
               arr.splice(j,1)
               j --
           }
       }
   }
   return arr
}
```
### fliter()
```js
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
```

### 利用递归去重
```js
function unique(arr) {
        var array= arr;
        var len = array.length;

    array.sort(function(a,b){   //排序后更加方便去重
        return a - b;
    })

    function loop(index){
        if(index >= 1){
            if(array[index] === array[index-1]){
                array.splice(index,1);
            }
            loop(index - 1);    //递归loop，然后数组去重
        }
    }
    loop(len-1);
    return array;
}
```