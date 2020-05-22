<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/logo-black.png" alt="Easy-ICON" style="max-width:100%;">

<p>
    <a href="https://www.npmjs.com/package/easy-icon"><img src="https://img.shields.io/npm/v/easy-icon.svg" alt="Version"></a>
    <a href="https://npmcharts.com/compare/easy-icon?minimal=true"><img src="https://img.shields.io/npm/dm/easy-icon.svg" alt="Downloads"></a>
    <a href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon.latest.min.js"><img src="https://img.shields.io/bundlephobia/minzip/easy-icon.svg" alt="Size"></a>
    <a href="https://github.com/theajack/easy-icon/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/easy-icon.svg" alt="License"></a>
    <a href="https://github.com/theajack/easy-icon/search?l=javascript"><img src="https://img.shields.io/github/languages/top/theajack/easy-icon.svg" alt="TopLang"></a>
    <a href="https://github.com/theajack/easy-icon/issues"><img src="https://img.shields.io/github/issues-closed/theajack/easy-icon.svg" alt="issue"></a>
</p>

### 🚀 高颜值、简单易用的web字体图标库

**[在线使用](https://theajack.gitee.io/easy-icon/index_cn.html) | [Github](https://github.com/theajack/easy-icon) | [Gitee](https://gitee.com/theajack/easy-icon) | [English](https://github.com/theajack/easy-icon/blob/master/README.md)**

----

[TOC]

----

### 1.Easy-ICON

Easy-ICON 是一个简单易用的icon字体库

Easy-ICON 使用 Font-Awesome 等多个图标库, 对原作者做出的贡献表示感谢!

1. 使用非常简单
2. 上千个常用的字体图标，包含多个字体图库
3. 自定义任意css样式，缩放不模糊
4. 按模块部分使用
   
### 2.安装使用

#### 2.1 使用css文件引用:(推荐下载到本地然后引用本地文件)

easy-icon 共分为了五个模块，可以独立单独引用

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-a.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-f.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-t.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-l.css">
```

或者使用一个集合的版本

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-all.css">
```


#### 2.2 或者使用npm安装:

```
npm i easy-icon;
```

您只需要引用一次即可:

与css文件引用一样，可以模块独立引用，无需使用全部

```js
import 'easy-icon';
import 'easy-icon/easy-icon-a.js';
import 'easy-icon/easy-icon-f.js';
import 'easy-icon/easy-icon-t.js';
import 'easy-icon/easy-icon-l.js';
```

或者使用集合版本

```js
import 'easy-icon/easy-icon-all.js';
```

#### 2.3 使用

Easy ICON使用起来十分简单，您只需要在您想要使用的地方插入一个如下的标签即可:

```html
<i class="ei-spmile"></i>
```

需要注意的是，五个模块对应的前缀不一样，分别为

- easy-icon-a: ei-
- easy-icon-a: ea-
- easy-icon-f: ef-
- easy-icon-t: et-
- easy-icon-l: el-

[查看可用的图标](https://theajack.gitee.io/easy-icon/)

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons1.png" alt="Easy-ICON" style="max-width:100%;">

<details>
    <summary>展开全部图标</summary>

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons2.png" alt="Easy-ICON" style="max-width:100%;">

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons3.png" alt="Easy-ICON" style="max-width:100%;">

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons4.png" alt="Easy-ICON" style="max-width:100%;">

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons5.png" alt="Easy-ICON" style="max-width:100%;">

</details>

### 3.其他

#### 3.1 让图标旋转

您可以通过添加 ei-spin 类来使图标旋转:

```html
<i class="ei-spinner-snake ei-spin"></i>
```

ei-spin 类对五个模块表现一致

#### 3.2 选择尺寸

Easy ICON 内置了八种不同大小的尺寸，从小到大依次为::xs,s,l,lg,2x,3x,4x,5x

尺寸类对五个模块表现一致

```html
<i class="ei-smile ei-s"></i>
<i class="ei-smile ei-xs"></i>
```

当然，您可以使用任何自定义css样式来覆盖默认的样式.


