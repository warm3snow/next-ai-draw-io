
# Next AI Draw.io (VS Code Extension)

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

## Introduction

Next AI Draw.io is a powerful VS Code extension that brings the full Draw.io diagramming experience directly into your development workflow. With seamless integration in a secure Webview panel, this extension enables you to create, edit, and manage diagrams without ever leaving VS Code. It is purpose-built for developers who want to visualize ideas, architectures, and workflows efficiently, and supports both public and private (self-hosted) deployments. Next AI Draw.io is based on and fully compatible with the upstream project [Next AI Draw.io](https://github.com/DayuanJiang/next-ai-draw-io), offering a familiar yet enhanced experience tailored for VS Code users.

---

## Features

- **Lightweight**: Edit diagrams without leaving VS Code.
- **Configurable**: Set `nextAiDrawio.baseUrl` for local development or private deployments.
- **Secure**: Strict Content Security Policy (CSP) limits loaded resources.

---

## Quick Start

1. Open the Command Palette and run: `Next AI Draw.io: Open`.
2. Run `Next AI Draw.io: Set Base URL` and enter `http://localhost:3000/` for local development. Leave empty to reset to default.
3. Use “Open in browser” in the panel to launch the same URL externally.

---

## Configuration

- **Base URL**: Use the command `Next AI Draw.io: Set Base URL`.
  - Default: `https://next-ai-drawio.jiang.jp/`
  - The extension ensures protocol and trailing slash; invalid values fall back to default.

---

## Compatibility

- VS Code `^1.84.0`
- macOS, Windows, Linux

---

## Installation

- **Marketplace**: Search for “Next AI Draw.io” and install, or visit [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=warm3snow.next-ai-draw-io).
- **From source**: Build and install the generated `.vsix` package.

```bash
# Install dependencies
npm install

# Build and package
npm run compile
npm run package

# Install the VSIX (via CLI)
code --install-extension next-ai-drawio-vscode-0.1.0.vsix
```

---

## Development

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch mode
npm run watch

# Package the extension (.vsix)
npm run package
```

---

## License

Licensed under the Apache License 2.0. See [LICENSE](LICENSE).

---

## Show Support

If you find this extension useful, please consider leaving a star. Every star motivates continued improvements — thank you to everyone who has starred the project!
