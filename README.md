# 概览

1. clone 项目

```bash
$ git clone --recurse-submodules https://github.com/max-studio/cmt-cs-learning-website.git
```

`--recurse-submodules` 选项是必选的，若在 clone 时没有添加该选项，也可以在 clone 后的项目目录中执行：

```bash
$ git submodule update --init --recursive
```

2. 依赖安装

进入项目目录中，执行以下命令：

```bash
$ yarn
```

3. 本地运行

启动本地服务：

```bash
$ yarn start
```

4. 格式化代码

格式化代码执行：

```bash
$ yarn prettier
```

5. 检测语法错误

语法检测请执行以下命令：

```bash
$ yarn lint
```

6. 项目打包

打包请执行：

```bash
$ yarn build
$ cd public
$ tar -cf dist.tar *
$ cd ..
```

# 贡献代码

1. fork 项目

将项目 fork 到你自己的 repositories 中，并采用概览中的方式 clone 至本地计算机。

2. 添加上游仓库

在项目目录中执行

```bash
$ git remote add upstream https://github.com/max-studio/cmt-cs-learning-website.git
```

添加上游仓库（源仓库）。

3. 同步代码

使用

```bash
$ git pull upstream master
```

同步上游仓库代码。

4. 添加你的代码

在编写自己的代码之前，必须要同步上游仓库代码并解决冲突。解决所有冲突后，请先阅读 [规范文档](./docs/standard.md) 并遵守本文档中的规范，然后就可以愉快地在项目中编写你的代码了。

3. commit

在终端中输入

```bash
$ git commit
```

此时，会提示你选择本次提交的类型、主题等等信息，根据提示输入对应信息即可。

4. 推送

使用

```bash
$ git push origin 分支名
```

提交到你的 repositories。

5. 创建 Pull Request
