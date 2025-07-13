# MediRemind

一个用于管理个人用药计划的移动应用程序。

## 项目简介

MediRemind是一个基于React Native开发的跨平台移动应用，旨在帮助用户管理日常用药计划，记录用药情况，并提供用药提醒功能。应用支持添加药物信息、设置用药时间、查看用药记录等功能。

## 功能特点

- 药物信息管理：添加、编辑和删除药物信息
- 用药计划设置：为每种药物设置用药时间（早、中、晚）
- 用药记录追踪：记录每次用药情况
- 用药提醒：根据设定的时间提醒用户按时用药

## 屏幕截图

*（此处可添加应用截图）*

## 安装指南

### 前提条件

- Node.js (>= 10.0.0)
- npm (>= 6.0.0) 或 yarn (>= 1.0.0)
- React Native CLI
- Android Studio (用于Android开发)
- Xcode (用于iOS开发，仅限macOS)

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/yourusername/mediremind.git
cd mediremind/matrix
```

2. 安装依赖
```bash
npm install
# 或使用yarn
yarn install
```

3. 运行应用
```bash
# iOS
react-native run-ios
# Android
react-native run-android
```

## 技术栈

- React Native (0.55.4)
- React Navigation
- React Native UI Kitten
- Teaset UI组件库

## 项目结构

```
matrix/
├── src/
│   ├── asserts/        # 静态资源文件
│   ├── component/      # 自定义组件
│   ├── config/         # 配置文件
│   ├── framework/      # 框架相关工具
│   ├── model/          # 数据模型
│   ├── screen/         # 应用页面
│   └── service/        # 业务逻辑服务
├── App.js              # 应用入口
└── ...
```

## 贡献指南

我们欢迎并感谢任何形式的贡献！如果您想为项目做出贡献，请遵循以下步骤：

1. Fork 这个仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

更多详细信息，请查看 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 代码规范

本项目遵循 [JavaScript Standard Style](https://standardjs.com/) 代码规范。

## 版本控制

我们使用 [SemVer](http://semver.org/) 进行版本控制。有关可用版本，请查看此仓库的 [标签](https://github.com/yourusername/mediremind/tags)。

## 许可证

本项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件。

## 联系方式

项目维护者 - [@yourusername](https://github.com/yourusername)

项目链接: [https://github.com/yourusername/mediremind](https://github.com/yourusername/mediremind)