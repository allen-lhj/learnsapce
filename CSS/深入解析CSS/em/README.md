## em 
在盒子内部添加p元素，为盒子设置一个padding，font-size设置为16px，那么将padding设置为1em
这里设置内边距的值为1em。浏览器将其乘以字号，最终渲染为16px。这一点很重要：浏览器会根据相对单位的值计算出绝对值，称作计算值（computedvalue）。
```CSS
.box {
            font-size: 16px;
            padding: 1em;
            border: 1px dashed gray;
        }
        p {
            border: 1px dashed gray;
        }
```
**em作为最常见的相对长度单位，适合基于特定的字号进行排版，在CSS中1em相当于当前的元素的字号**