# Next AI Draw.io（VS Code 扩展）

<p align="center">
  <img src="resources/logo.png" alt="Next AI Draw.io Logo" width="128"/>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=warm3snow.next-ai-draw-io">
    <img src="https://img.shields.io/visual-studio-marketplace/i/warm3snow.next-ai-draw-io?logo=visual-studio-code" alt="Downloads"/>
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=warm3snow.next-ai-draw-io">
    <img src="https://img.shields.io/visual-studio-marketplace/r/warm3snow.next-ai-draw-io?logo=visual-studio-code" alt="Rating"/>
  </a>
  <a href="https://github.com/warm3snow/next-ai-draw-io">
    <img src="https://img.shields.io/github/stars/warm3snow/next-ai-draw-io?style=social" alt="GitHub stars"/>
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License: Apache-2.0"/>
  </a>
</p>

<p align="center">
  <a href="README.md">English</a> | <a href="README.zh-CN.md">中文</a>
</p>

---

## 简介

Next AI Draw.io 是一个 VS Code 插件，通过 Webview 在编辑器中嵌入一个可配置的 Draw.io 页面（默认指向线上服务），帮助你在 VS Code 内直接创建与编辑流程图、架构图等，并探索与 AI 的集成能力。

- 轻量：无需离开 VS Code，即可在面板中使用 Draw.io。
- 可配置：支持在设置中自定义 `baseUrl`，方便本地开发和私有部署。
- 安全：严格的 CSP 配置，限制资源加载来源。

> 本扩展面向并服务于上游项目 Next AI Draw.io（https://github.com/DayuanJiang/next-ai-draw-io），在 VS Code 内提供一致的使用体验。

## 快速开始

1. 打开命令面板，执行：`Next AI Draw.io: Open`。
2. 运行命令：`Next AI Draw.io: Set Base URL`，输入 `http://localhost:3000/` 以进行本地开发；留空可重置为默认地址。
3. 面板右上角提供“Open in browser”，可在浏览器中直接打开当前地址。

## 配置（命令）

- 基础地址通过命令 `Next AI Draw.io: Set Base URL` 设置。
  - 默认值：`https://next-ai-drawio.jiang.jp/`
  - 插件会自动补齐协议并确保以 `/` 结尾；非法地址会提示并回退至默认值。

## 安装

- Marketplace：在 VS Code 扩展市场搜索 “Next AI Draw.io” 并安装，或访问 https://marketplace.visualstudio.com/items?itemName=warm3snow.next-ai-draw-io。
- 源码安装：本地编译并安装生成的 `.vsix` 包。

```bash
# 安装依赖
npm install

# 构建与打包
npm run compile
npm run package

# 安装 VSIX（命令行）
code --install-extension next-ai-drawio-vscode-0.1.0.vsix
```

## 支持与致谢

如果这个扩展对你有帮助，欢迎点亮 Star！每一颗 Star 都是对项目持续优化的支持与鼓励——感谢所有为项目点赞的朋友！

---

## Star趋势

[![Star History Chart](https://api.star-history.com/svg?repos=warm3snow/next-ai-draw-io&type=Date)](https://star-history.com/#warm3snow/next-ai-draw-io&Date)
