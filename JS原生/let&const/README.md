## let

1. let定义变量不能重复声明

   ```javascript
   let star = '罗志祥'
   let star = '小猪'
   //这样会报错
   ```

   

2. 块级作用域

3. 不存在变量提升

   ```
   console.log(song)
   let song = '恋爱达人'
   //Uncaught ReferenceError: Cannot access 'song' before initialization
   ```

4. 不影响作用域链

   ```javascript
        let star = '刘德华'
               function fn(){
                   console.log(star)
               }
           }
           fn() //刘德华
   ```

```javascript
<style>
        .item{
            float: left;
            margin-left: 10px;
            width: 50px;
            height: 30px;
            border: 1px solid blueviolet;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="page-header">点击切换颜色</h2>   
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>

    <script>
        //获取dom对象
       let item = document.getElementsByClassName('item')
       //遍历并绑定点击事件
       for(var i = 0;i < item.length; i++){
           item[i].onclick = function(){
               this.style.background = 'pink'
               
           }
       }
    </script>
```

![显示效果]([https://raw.githubusercontent.com/allen-lhj/learnSpace/master/JS%E5%8E%9F%E7%94%9F/let%26const/let%26const1.png](https://raw.githubusercontent.com/allen-lhj/learnSpace/master/JS原生/let%26const/let%26const1.png))

可能会想到我们可以使用

```javascript
item[i].style.background = 'pink'
```

但是这样是不行的，为什么呢，因为使用var声明变量，这个i一直在全局作用域中，所以for循环之后，第一次i变为了1，第二次变成了2，第三次变成了3

而三张图片索引为0，1，2，所以会报错

而使用let

```javascript
{
  let = 1
}
{
  let = 2
}
//只在自己的作用域中生效
```

