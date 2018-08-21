## 斐波那契数列

> 定义：斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：1、1、2、3、5、8、13、21、34、…… 在数学上，斐波纳契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=2，n∈N*）。

### 题目一：

> 写一个函数，输入n，求斐波那契（Fibonacci）数列的第n项。

* 递归解法（效率很低）：

```js
    function fibonacci_sol1(n){
        if(n < 0) return 0;
        if(n === 1) return 1;
        return fibonacci_sol1(n-1) + fibonacci_sol1(n-2);
    }
```

* 循环解法：

大概思路：首先根据f(0)和f(1)算出f(2)，再根据f(1)和f(2)算出f(3)…… 依此类推就可以算出第n项了。很容易理解，这种思路的时间复杂度是o(n)。实现代码如下：

```js
    function fibonacci_sol2(n){
        var result = [0,1];
        if(n<2){
            return result[n];
        }

        var fOne = 1,fTwo = 0,fN;
        for(var i = 2;i<=n;++i){
            fN = fOne + fTwo;

            fTwo = fOne；
            fOne = fN;
        }
        return fN;
    }
```