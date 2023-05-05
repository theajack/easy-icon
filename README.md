<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/logo-black.png" alt="Easy-ICON" style="max-width:100%;">

<p>
    <a href="https://www.npmjs.com/package/easy-icon"><img src="https://img.shields.io/npm/v/easy-icon.svg" alt="Version"></a>
    <a href="https://npmcharts.com/compare/easy-icon?minimal=true"><img src="https://img.shields.io/npm/dm/easy-icon.svg" alt="Downloads"></a>
    <a href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon.latest.min.js"><img src="https://img.shields.io/bundlephobia/minzip/easy-icon.svg" alt="Size"></a>
    <a href="https://github.com/theajack/easy-icon/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/easy-icon.svg" alt="License"></a>
    <a href="https://github.com/theajack/easy-icon/search?l=javascript"><img src="https://img.shields.io/github/languages/top/theajack/easy-icon.svg" alt="TopLang"></a>
    <a href="https://github.com/theajack/easy-icon/issues"><img src="https://img.shields.io/github/issues-closed/theajack/easy-icon.svg" alt="issue"></a>
</p>

### 🚀 A beautiful, easy-to-use web font icon library

**[Online trial](https://theajack.gitee.io/easy-icon/) | [Github](https://github.com/theajack/easy-icon) | [Gitee](https://gitee.com/theajack/easy-icon) | [中文](https://github.com/theajack/easy-icon/blob/master/README_CN.md)**

----

[TOC]

----

### 0. Quick start

Easy-ICON is a high-value, easy-to-use web font icon library, you only need to introduce a css file (or an npm package), you can simply use more than 1,000 beautiful icons

The following is a simple example introduced by the css file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-all.css">
</head>
<body>
    <i class="ei-heart ei-xs" style="color: red;"></i>
    <i class="ei-spinner-indicator ei-spin"></i> <!--A rotating loading-->
    <i class="ea-star-half-empty"></i>
    <i class="et-like ei-l"></i>
    <i class="ef-html5 ei-xl"></i>
    <i class="el-goods ei-4x"></i>
</body>
</html>
```

Effect picture:

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/samples.png" alt="Easy-ICON" style="max-width:100%;">

[**😃 Experience 1583 icons online**](https://theajack.gitee.io/easy-icon)

### 1. Introduction

Easy-ICON is a easy to use web font icon lib

Easy-ICON uses multiple icon libraries, such as Font-Awesome, to thank the original author for their contributions!

Features:

1. Very simple to use
2. 1583 commonly used font icons, including multiple font libraries
3. Customize any css style, the zoom is not blurred
4. Use according to module

### 2.Install & Use

#### 2.1 Use css file reference：(Recommended to download to local and then reference local files)

Easy-icon is divided into five modules, which can be referenced independently

##### 2.1.1 Online Mode

The online mode relies on the font library on the network, while the offline mode converts the font library to base64 so that it can be used offline

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-a.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-f.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-t.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-l.css">
```

Or use a collection version

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-all.css">
```

##### 2.1.2 Offline Mode

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon.o.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-a.o.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-f.o.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-t.o.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-l.o.css">
```

Or use a collection version

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon-all.o.css">
```

#### 2.2 OR Use npm:

```
npm i easy-icon;
```

You only need to import once:

Same as css file reference, can be referenced independently by module, without using all

##### 2.2.1 Online Mode

```js
import 'easy-icon';
import 'easy-icon/easy-icon-a.js';
import 'easy-icon/easy-icon-f.js';
import 'easy-icon/easy-icon-t.js';
import 'easy-icon/easy-icon-l.js';
```

You can also directly import css files (need to be used with tools such as css-loader)

```js
import 'easy-icon/css/easy-icon.css';
import 'easy-icon/css/easy-icon-a.css';
import 'easy-icon/css/easy-icon-f.css';
import 'easy-icon/css/easy-icon-t.css';
import 'easy-icon/css/easy-icon-l.css';
```

Or use a collection version

```js
import 'easy-icon/easy-icon-all.js';
```

Css file

```js
import 'easy-icon/css/easy-icon-all.css';
```

##### 2.2.2 Offline Mode

```js
import 'easy-icon/offline';
import 'easy-icon/offline/easy-icon-a.js';
import 'easy-icon/offline/easy-icon-f.js';
import 'easy-icon/offline/easy-icon-t.js';
import 'easy-icon/offline/easy-icon-l.js';
```

You can also directly import css files (need to be used with tools such as css-loader)

```js
import 'easy-icon/offline/css/easy-icon.css';
import 'easy-icon/offline/css/easy-icon-a.css';
import 'easy-icon/offline/css/easy-icon-f.css';
import 'easy-icon/offline/css/easy-icon-t.css';
import 'easy-icon/offline/css/easy-icon-l.css';
```

Or use a collection version

```js
import 'easy-icon/offline/easy-icon-all.js';
```

Css file

```js
import 'easy-icon/offline/css/easy-icon-all.css';
```

#### 2.3 Useage

It's very easy to use, you just need to insert the tag anywhere:

```html
<i class="ei-smile"></i>
```

It should be noted that the prefixes corresponding to the five modules are different, respectively

- easy-icon-a: ei-
- easy-icon-a: ea-
- easy-icon-f: ef-
- easy-icon-t: et-
- easy-icon-l: el-

[See which icons you can use](https://theajack.gitee.io/easy-icon/)

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons1.png" alt="Easy-ICON" style="max-width:100%;">

<details>
    <summary>Expand all icons</summary>

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons2.png" alt="Easy-ICON" style="max-width:100%;">

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons3.png" alt="Easy-ICON" style="max-width:100%;">

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons4.png" alt="Easy-ICON" style="max-width:100%;">

<img src="https://cdn.jsdelivr.net/gh/theajack/easy-icon/assets/images/icons5.png" alt="Easy-ICON" style="max-width:100%;">

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

#### 3.3 Flip

Use `ei-flip-horizontal` to flip the icon 180 degrees around the vertical axis

```html
<i class="ei-thumbs-o-up ei-flip-horizontal"></i>
```

Use `ei-flip-horizontal` to flip the icon 180 degrees around the vertical axis

```html
<i class="ei-thumbs-o-up ei-flip-vertical"></i>
```

#### 3.4 Rotate

Use `ei-rotate-90`,` ei-rotate-180`, `ei-rotate-270` to rotate the icon clockwise 90, 180, 270 degrees respectively

```html
<i class="ei-smile ei-rotate-90"></i>
<i class="ei-smile ei-rotate-180"></i>
<i class="ei-smile ei-rotate-270"></i>
```
