
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


Next AI Draw.io 是一款强大的 VS Code 插件，将完整的 Draw.io 流程图体验无缝集成到你的开发环境中。通过安全的 Webview 面板，你可以在 VS Code 内直接创建、编辑和管理各类图表，无需切换窗口。该插件专为开发者高效可视化思路、架构和流程而设计，支持公有云和本地/私有化部署，并探索 AI 能力。Next AI Draw.io 基于并兼容上游项目 [Next AI Draw.io](https://github.com/DayuanJiang/next-ai-draw-io)，为 VS Code 用户带来熟悉且增强的使用体验。

---

## 特性

- **轻量**：无需离开 VS Code，即可编辑流程图、架构图等。
- **可配置**：支持设置 `nextAiDrawio.baseUrl`，方便本地开发或私有部署。
- **安全**：严格的内容安全策略（CSP），限制资源加载来源。

---

## 快速开始

1. 打开命令面板，执行：`Next AI Draw.io: Open`。
2. 运行命令：`Next AI Draw.io: Set Base URL`，输入 `http://localhost:3000/` 以进行本地开发；留空可重置为默认地址。
3. 面板右上角可用“Open in browser”在浏览器中打开当前地址。

---

## 配置

- **基础地址**：通过命令 `Next AI Draw.io: Set Base URL` 设置。
  - 默认值：`https://next-ai-drawio.jiang.jp/`
  - 插件会自动补齐协议并确保以 `/` 结尾；非法地址会提示并回退至默认值。

---

## 兼容性

- 兼容 VS Code `^1.84.0`
- 支持 macOS、Windows、Linux

---

## 安装

- **市场安装**：在 VS Code 扩展市场搜索 “Next AI Draw.io” 并安装，或访问 [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=warm3snow.next-ai-draw-io)。
- **源码安装**：本地编译并安装生成的 `.vsix` 包。

```bash
# 安装依赖
npm install

# 构建与打包
npm run compile
npm run package

# 安装 VSIX（命令行）
code --install-extension next-ai-drawio-vscode-0.1.0.vsix
```

---

## 开发

```bash
# 安装依赖
npm install

# 编译 TypeScript
npm run compile

# 监听模式
npm run watch

# 打包扩展（.vsix）
npm run package
```

---

## 许可证

本项目基于 Apache License 2.0 许可。详见 [LICENSE](LICENSE)。

---

## 支持与致谢

如果这个扩展对你有帮助，欢迎点亮 Star！每一颗 Star 都是对项目持续优化的支持与鼓励——感谢所有为项目点赞的朋友！

---

## Star 趋势

[![Star History Chart](https://api.star-history.com/svg?repos=warm3snow/next-ai-draw-io&type=Date)](https://star-history.com/#warm3snow/next-ai-draw-io&Date)
