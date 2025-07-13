# MediRemind

<div align="center">

![MediRemind Logo](https://via.placeholder.com/150x150.png?text=MediRemind)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/mediremind.svg)](https://github.com/yourusername/mediremind/issues)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/mediremind.svg)](https://github.com/yourusername/mediremind/stargazers)

**一个用于管理个人用药计划的移动应用程序**

[English](README_EN.md) | 简体中文

</div>

## 📋 目录

- [项目简介](#项目简介)
- [功能特点](#功能特点)
- [屏幕截图](#屏幕截图)
- [快速开始](#快速开始)
  - [前提条件](#前提条件)
  - [安装步骤](#安装步骤)
- [使用指南](#使用指南)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [路线图](#路线图)
- [贡献指南](#贡献指南)
- [版本历史](#版本历史)
- [常见问题](#常见问题)
- [维护者](#维护者)
- [许可证](#许可证)
- [致谢](#致谢)

## 🚀 项目简介

MediRemind是一个基于React Native开发的跨平台移动应用，旨在帮助用户管理日常用药计划，记录用药情况，并提供用药提醒功能。应用支持添加药物信息、设置用药时间、查看用药记录等功能。

无论是为自己还是为家人管理药物，MediRemind都能帮助您准确记录用药情况，避免漏服或重复用药，提高用药安全性和依从性。

### 为什么选择MediRemind？

- 📱 **跨平台支持**：同时支持iOS和Android平台
- 🔔 **智能提醒**：根据设定的时间准时提醒用药
- 📊 **数据可视化**：直观展示用药记录和统计数据
- 🔒 **隐私保护**：所有数据存储在本地，保护用户隐私
- 🌙 **暗黑模式**：支持明暗两种主题，减少夜间用眼疲劳

## ✨ 功能特点

- **药物信息管理**
  - 添加、编辑和删除药物信息
  - 支持设置药物名称、剂量、服用方式等详细信息
  - 可添加药物图片，方便识别

- **用药计划设置**
  - 为每种药物设置用药时间（早、中、晚）
  - 支持自定义用药频率（每天、隔天、每周等）
  - 可设置用药开始和结束日期

- **用药记录追踪**
  - 记录每次用药情况
  - 查看历史用药记录
  - 统计用药依从性数据

- **用药提醒**
  - 根据设定的时间提醒用户按时用药
  - 支持多种提醒方式（通知、声音、震动）
  - 可设置重复提醒

## 📱 屏幕截图

<div align="center">
  <img src="https://via.placeholder.com/200x400.png?text=药物列表" width="200" alt="药物列表" />
  <img src="https://via.placeholder.com/200x400.png?text=添加药物" width="200" alt="添加药物" />
  <img src="https://via.placeholder.com/200x400.png?text=用药记录" width="200" alt="用药记录" />
</div>

## 🚀 快速开始

### 前提条件

在开始之前，请确保您的系统已安装以下软件：

- Node.js (>= 10.0.0)
- npm (>= 6.0.0) 或 yarn (>= 1.0.0)
- React Native CLI
- Android Studio (用于Android开发)
- Xcode (用于iOS开发，仅限macOS)

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/yourusername/mediremind.git
cd mediremind/matrix
```

2. **安装依赖**

```bash
npm install
# 或使用yarn
yarn install
```

3. **运行应用**

```bash
# iOS
react-native run-ios
# Android
react-native run-android
```

## 📖 使用指南

### 添加新药物

1. 点击底部导航栏中的"添加药物"按钮
2. 填写药物名称、剂量等信息
3. 设置用药时间和频率
4. 点击"保存"按钮完成添加

### 记录用药情况

1. 在"用药计划"页面查看今日待服用的药物
2. 服用药物后点击对应药物的"已服用"按钮
3. 系统将自动记录用药时间

### 查看用药记录

1. 点击底部导航栏中的"用药记录"按钮
2. 选择日期范围查看历史记录
3. 可查看用药依从性统计数据

## 🛠️ 技术栈

- [React Native](https://reactnative.dev/) (0.55.4) - 跨平台移动应用开发框架
- [React Navigation](https://reactnavigation.org/) - 页面导航
- [React Native UI Kitten](https://akveo.github.io/react-native-ui-kitten/) - UI组件库
- [Teaset](https://github.com/rilyu/teaset) - UI组件库
- [Jest](https://jestjs.io/) - 测试框架

## 📁 项目结构

```
matrix/
├── src/
│   ├── asserts/        # 静态资源文件（图片、字体等）
│   ├── component/      # 可复用组件
│   │   └── switch/     # 开关组件
│   ├── config/         # 配置文件
│   ├── framework/      # 框架相关工具
│   │   ├── charset/    # 字符集工具
│   │   ├── scale.js    # 屏幕适配工具
│   │   └── storage/    # 本地存储工具
│   ├── model/          # 数据模型
│   ├── screen/         # 应用页面
│   └── service/        # 业务逻辑服务
├── App.js              # 应用入口
└── ...
```

## 🗺️ 路线图

- [ ] 多语言支持
- [ ] 数据备份与恢复功能
- [ ] 药品信息数据库集成
- [ ] 药物相互作用检查
- [ ] 用药统计报表导出
- [ ] 家庭共享功能
- [ ] 与医疗健康设备集成

查看[open issues](https://github.com/yourusername/mediremind/issues)获取更多功能请求和已知问题。

## 🤝 贡献指南

我们欢迎并感谢任何形式的贡献！如果您想为项目做出贡献，请遵循以下步骤：

1. Fork 这个仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

更多详细信息，请查看 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 📋 版本历史

有关所有版本的详细信息，请参阅[CHANGELOG.md](CHANGELOG.md)。

## ❓ 常见问题

### Q: 应用是否支持离线使用？
A: 是的，MediRemind完全支持离线使用，所有数据都存储在本地设备上。

### Q: 如何备份我的用药数据？
A: 目前，数据备份功能正在开发中。在未来的版本中，我们将提供数据导出和云备份功能。

### Q: 应用支持哪些语言？
A: 目前应用仅支持中文，我们计划在未来版本中添加更多语言支持。

### Q: 如何设置重复用药提醒？
A: 在添加药物时，您可以设置用药频率（如每天、隔天、每周等）和提醒时间。

## 👨‍💻 维护者

* [coolqidedd](https://github.com/coolqidedd) - **项目创建者和主要维护者**

查看[CONTRIBUTORS.md](CONTRIBUTORS.md)获取所有贡献者列表。

## 📄 许可证

本项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [React Native](https://reactnative.dev/) - 提供跨平台移动应用开发框架
- [React Navigation](https://reactnavigation.org/) - 提供页面导航功能
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) - 提供UI组件
- [所有贡献者](CONTRIBUTORS.md) - 为项目做出贡献的开发者

---

<div align="center">
  <sub>Built with ❤️ by the MediRemind team.</sub>
</div>