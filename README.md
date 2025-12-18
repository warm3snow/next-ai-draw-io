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

This VS Code extension embeds a configurable Draw.io experience in a Webview panel. It is built to work with and showcase the upstream project Next AI Draw.io: https://github.com/DayuanJiang/next-ai-draw-io.

- Lightweight: edit diagrams without leaving VS Code.
- Configurable: set `nextAiDrawio.baseUrl` for local development or private deployments.
- Secure: strict CSP limits loaded resources.

### Quick Start

1. Open the Command Palette and run: `Next AI Draw.io: Open`.
2. Run `Next AI Draw.io: Set Base URL` and enter `http://localhost:3000/` for local development. Leave empty to reset to default.
3. Use “Open in browser” to launch the same URL externally.

### Configuration

- Base URL: use the command `Next AI Draw.io: Set Base URL`.
  - Default: `https://next-ai-drawio.jiang.jp/`
  - The extension ensures protocol and trailing slash; invalid values fall back to default.

### Compatibility

- VS Code `^1.84.0`
- macOS, Windows, Linux

### Development & Packaging

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

### License

Licensed under Apache License 2.0. See [LICENSE](LICENSE).
---

## Overview

This extension embeds the Next AI Draw.io experience inside VS Code via a secure Webview. It is built for and references the upstream project Next AI Draw.io: https://github.com/DayuanJiang/next-ai-draw-io.

- Edit diagrams without leaving VS Code.
- Configure the base URL to point at your local or private deployment.
- Strict Content Security Policy (CSP) to limit resource origins.

### Quick Start

1. Open the Command Palette and run: `Next AI Draw.io: Open`.
2. Run `Next AI Draw.io: Set Base URL` and enter `http://localhost:3000/` for local development. Leave empty to reset to default.
3. Use “Open in browser” in the panel to launch the same URL externally.

### Configuration

- Base URL: use the command `Next AI Draw.io: Set Base URL`.
  - Default: `https://next-ai-drawio.jiang.jp/`
  - The extension ensures protocol and trailing slash; invalid values fall back to default.

## Install

- Marketplace: search for “Next AI Draw.io” and install, or visit https://marketplace.visualstudio.com/items?itemName=warm3snow.next-ai-draw-io.
- From source: build and install the generated `.vsix` package.

```bash
# Install dependencies
npm install

# Build and package
npm run compile
npm run package

# Install the VSIX (via CLI)
code --install-extension next-ai-drawio-vscode-0.1.0.vsix
```

## Show Support

If you find this useful, please consider leaving a star. Every star motivates continued improvements — thank you to everyone who has starred the project!

---
