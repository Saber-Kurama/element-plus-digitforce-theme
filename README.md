## Element-plus的 theme

目前copy的element-plus的的docs的目录，作为演示，后续考虑换成其他方案(轻量)，或者增加设计的功能

因为docs的项目依赖`@element-plus`, 而`@element-plus` 没有发布新包(最后一次的发版还是5个月前)，所有目前还得先把 package的目录拷贝过来， 后面在修改docs的时候再修改成`element-plus`包，而非源码。拷贝的日期 2022-01-04

### 主题的目录结构

```
├── _extensions.scss // 变量修改不了的值放到这里修改
├── _fonts.scss // 字体的修改
├── _variables.scss // 变量值的修改以及自定义变量
├── fonts  // 字体目录
├── index.scss // 入口
└── theme.scss // 主题文件
```