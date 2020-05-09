![Easy-ICON](https://github.com/theajack/easy-icon/blob/master/assets/images/logo-black.png?raw=true)

#### [theajack](https://www.theajack.com/)
### A Easy to Use Web Font ICON lib

**[在线使用](https://theajack.gitee.io/easy-icon/index_cn.html) | [English](https://github.com/theajack/easy-icon/blob/master/README.md)**

----

[TOC]

----

### 1.Easy-ICON

Easy-ICON 是一个简单易用的icon字体库

Easy-ICON 使用 Font-Awesome 图标库, 对原作者做出的贡献表示感谢!

1. 使用非常简单
2. 344 个常用的字体图标
3. 自定义任意css样式，缩放不模糊

### 2.安装使用

#### 2.1 使用css文件引用:(推荐下载到本地然后引用本地文件)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon.min.css">
```

#### 2.2 或者使用npm安装:

```
npm i easy-icon;
```

您只需要引用一次即可:

```js
import 'easy-icon';
```

#### 2.3 使用

Easy ICON使用起来十分简单，您只需要在您想要使用的地方插入一个如下的标签即可:

```html
<i class="ei-spmile"></i>
```

[查看可用的图标](https://theajack.gitee.io/easy-icon/)

![Easy-ICON](https://github.com/theajack/easy-icon/blob/master/assets/images/icons.png?raw=true)

### 3.其他

#### 3.1 让图标旋转

您可以通过添加 ei-spin 类来使图标旋转:

```html
<i class="ei-spinner-snake ei-spin"></i>
```

#### 3.2 选择尺寸

Easy ICON 内置了八种不同大小的尺寸，从小到大依次为::xs,s,l,lg,2x,3x,4x,5x

```html
<i class="ei-smile ei-s"></i>
<i class="ei-smile ei-xs"></i>
```

当然，您可以使用任何自定义css样式来覆盖默认的样式.


