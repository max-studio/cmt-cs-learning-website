# 项目结构

本项目主要包含布局、组件、静态资源、工具、页面、模版这几个目录。

## 组件目录

components 目录是用于放置组件的目录，考虑到 Gatsby 项目的特殊性（Gatsby 项目不可在 pages 目录中添加其他非页面的文件，因为 Gatsby 的约定式路由会将这些文件认定为页面），因此 components 目录需要和 pages 目录同级，也就是同在 src 目录下。

组件目录主要用于存放一些与业务无关或弱相关的组件，且每个组件单独占有一个子目录。

## 工具目录

出于和组件目录同样的考虑，工具目录 utils 也要放在 src 目录下，与 pages 目录同级。主要用于存放在页面中用到的工具函数、工具类等等。对于一个需要抽离工具函数或类的组件，可在该组件目录中建立对应的 utils 目录来存放这些文件。

## 类型文件

在 TypeScript 中涉及到定义类型，对于存放类型有如下规则：

- 全局的类型（多个组件都要用到的类型），定义在 src 目录下的 types.ts 文件中；
- 页面中需要使用的类型，定义在页面对应的 tsx 文件中；
- 组件需要使用的类型，若是 props 类型，则直接定义在该组件对应的 tsx 文件中，若是其他类型，则定义在该组件目录下的 types.ts 文件中。

## 布局

布局目录存放页面整体的布局文件，目录是在 src 目录下的 layouts 目录。一般不涉及大量修改。

## 静态资源

静态资源存放在 src 目录下的 assets 目录中，静态资源主要分为三类，第一类为样式文件，放在 css 目录中，第二类为字体资源，放在 font 目录中，第三类为图片资源，放在 img 目录中。

## 页面

页面放在 pages 目录下，每个文件都会被解析成对应的路由，比如 test.tsx 就会被解析成 http://localhost:8000/test/ 这个路由。

## 模版

用于在编译时创建页面的模版，这一部分内容会在 Gatsby 编译时加载进来。一般不涉及大量更改。
