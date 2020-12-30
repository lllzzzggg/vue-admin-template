<!--
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-02-12 14:47:34
 * @LastEditors: liuzigen
 * @LastEditTime: 2020-02-12 16:11:46
 -->

## 简介

[admin-template]是一个后台前端搭建模版，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)实现。它使用了最新的前端技术栈，内置了动态路由，权限验证，它可以帮助你快速搭建后台产品原型。

## 开发

```bash
# 克隆项目
git clone git@gitlab.xuanke.com:CET46/frontend/admin-template.git

# 进入项目目录
cd admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

## 配置菜单栏

修改 src/setting.json 中的[appCode]字段为自己的 app code
