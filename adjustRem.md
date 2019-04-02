 首先，根据设计稿确定某个屏幕宽度下对应的html的font-size值。比如，大约1200像素时，对应的rem为100像素（之所以设置为100像素，是为了换算方便）：

 ```css
 html {
  font-size: 100px;
  body {
    font-size: .16rem;
    min-width: 1226px;
    background-color: #ffffff;
    font-family: sans-serif;
  }
}
```

然后再设定一个缩放系数，比如12，通过JavaScript来根据浏览器窗口大小动态修改rem大小。我们定义了一个模块ajust_rem.js，导出adjustRemOnResize类：

```js
import throttle from 'lodash.throttle'

export default class adjustRemOnResize {
  constructor ({divisor, remBaseSize}) {
    this.divisor = divisor
    this.remBaseSize = remBaseSize
    this.html = $('html')
    this.resize()
    $(window).on('resize', throttle(this.resize.bind(this), 300))
  }
  resize () {
    const currentWidth = $(window).width()
    const remDyncSize = currentWidth / this.divisor
    const fontSize = remDyncSize < this.remBaseSize ? this.remBaseSize : remDyncSize
    this.html.css({fontSize})
  }
}
```

在相应页面引入这个类，传入参数，创建实例：

```js
import adjustRemOnResize from './ajust_rem.js'

const adjustRemOnResizeOptions = {
  divisor: 12,
  remBaseSize: 100
}
new adjustRemOnResize(adjustRemOnResizeOptions)
```

remBaseSize其实就是最小rem值。从前面的代码可知，当浏览器窗口宽度为1200像素时，除以12就是100像素。相应地，当浏览器窗口宽度为2400像素时，除以12，rem就是200像素。

而所有尺寸（文字大小、内外边距、定位偏移等）需要根据窗口大小动态改变的值，都使用类似如下的方式来声明：

```css
small {
  font-size: .12rem;
}
.double-engine {
  h2 {
    margin-bottom: 0.2rem;
  }
  figure {
    margin-top: 0.6rem;
  }
}
```

原文链接：[360AI音箱官网开发手机](https://github.com/75team/w3c/blob/master/articles/20190401_360AI%E9%9F%B3%E7%AE%B1%E5%AE%98%E7%BD%91%E5%BC%80%E5%8F%91%E6%89%8B%E8%AE%B0.md)