# m-type

通用 `ts` 的类型工具

<br />


## 使用

### 安装

```shell
pnpm i m-type
```

<br />

### 类型判断

```ts
import { isString } from 'm-type'

isString('foo') // true

isString(1) // false

let bar: any = 'bar'

if (isString(bar)) {
    bar.toLowerCase() // 类型正确的
}
```

<br />

### 获取类型

```ts
import type { UnArray } from 'm-type'

type Foo = UnArray<number[]> // number

type Bar = UnArray<string[]> // string
```

更多的类型工具可见 👉 [源码](./src)

## 组织 🦔

欢迎关注 **帝莎编程**

- [官网](http://dishaxy.dishait.cn/)
- [Gitee](https://gitee.com/dishait)
- [Github](https://github.com/dishait)
- [网易云课堂](https://study.163.com/provider/480000001892585/index.htm?share=2&shareId=480000001892585)


<br />
<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).