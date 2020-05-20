![Easy-ICON](https://github.com/theajack/easy-icon/blob/master/assets/images/logo-black.png?raw=true)

#### [theajack](https://www.theajack.com/)
### A Easy to Use Web Font ICON lib

**[Online trial](https://theajack.gitee.io/easy-icon/) | [中文](https://github.com/theajack/easy-icon/blob/master/README_CN.md)**

----

[TOC]

----

### 1.Why Easy-ICON

Easy-ICON is a easy to use web font icon lib

Easy-ICON uses multiple icon libraries, such as Font-Awesome, to thank the original author for their contributions!

1. Very simple to use
2. Thousands of commonly used font icons, including multiple font libraries
3. Customize any css style, the zoom is not blurred
4. Use according to module

### 2.Install & Use

#### 2.1 Use css file reference：(Recommended to download to local and then reference local files)

Easy-icon is divided into five modules, which can be referenced independently

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-a.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-f.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-t.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-l.css">
```

Or use a collection version

#### 2.2 OR Use npm:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-all.css">
```

```
npm i easy-icon;
```

You only need to import once:

Same as css file reference, can be referenced independently by module, without using all

```js
import 'easy-icon';
import 'easy-icon/easy-icon-a.js';
import 'easy-icon/easy-icon-f.js';
import 'easy-icon/easy-icon-t.js';
import 'easy-icon/easy-icon-l.js';
```

#### 2.3 Useage

It's very easy to use, you just need to insert the tag anywhere:

```html
<i class="ei-spmile"></i>
```

It should be noted that the prefixes corresponding to the five modules are different, respectively

- easy-icon-a: ei-
- easy-icon-a: ea-
- easy-icon-f: ef-
- easy-icon-t: et-
- easy-icon-l: el-

[See which icons you can use](https://theajack.gitee.io/easy-icon/)

![Easy-ICON](https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons1.png)

<details>
    <summary>Expand all icons</summary>

![Easy-ICON](https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons2.png)

![Easy-ICON](https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons3.png)

![Easy-ICON](https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons4.png)

![Easy-ICON](https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons5.png)

</details>

### 3.Others

#### 3.1 Spin the icon

You can add the ei-spin class to spin the icon:

```html
<i class="ei-spinner-snake ei-spin"></i>
```

The ei-spin class behaves consistently for the five modules

#### 3.2 Choose size

Easy-icon comes in eight sizes to choose from, from small to large:xs,s,l,lg,2x,3x,4x,5x

The size class performs the same for the five modules

```html
<i class="ei-smile ei-s"></i>
<i class="ei-smile ei-xs"></i>
```

Of course, you can use css to customize any style.


