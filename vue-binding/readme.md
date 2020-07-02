### proxy相较于object.defineProperty的优势:
- 直接监听对象而非属性
- 直接监听数组的变化
- 拦截方式较多（有13种方式）
- Proxy返回一个新对象，可以只操作新对象达到目的，而Object.defineProperty只能遍历对象属性直接修改（需要用深拷贝进行修改）
- Proxy作为新标准将受到浏览器厂商重点持续的性能优化