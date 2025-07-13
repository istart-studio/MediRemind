# 开发指南

本文档提供了MediRemind项目的开发指南，帮助新的贡献者快速上手。

## 开发环境设置

### 前提条件

请确保您的系统已安装以下软件：

- Node.js (>= 10.0.0)
- npm (>= 6.0.0) 或 yarn (>= 1.0.0)
- React Native CLI
- Android Studio (用于Android开发)
- Xcode (用于iOS开发，仅限macOS)

### 设置步骤

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

3. 启动开发服务器
```bash
npm start
# 或使用yarn
yarn start
```

4. 在模拟器或设备上运行应用
```bash
# iOS
react-native run-ios
# Android
react-native run-android
```

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

## 开发工作流

1. 创建一个新的分支
```bash
git checkout -b feature/your-feature-name
```

2. 进行代码更改

3. 确保代码符合规范
```bash
npm run lint
# 或使用yarn
yarn lint
```

4. 运行测试
```bash
npm test
# 或使用yarn
yarn test
```

5. 提交更改
```bash
git add .
git commit -m "feat: 添加新功能"
```

6. 推送到远程仓库
```bash
git push origin feature/your-feature-name
```

7. 创建Pull Request

## 代码规范

本项目遵循[JavaScript Standard Style](https://standardjs.com/)代码规范。在提交代码前，请确保您的代码符合这一规范。

## 测试

我们使用Jest进行单元测试。请为您添加的功能编写测试，并确保所有测试通过。

## 文档

请为您添加的功能或修改的代码添加适当的文档和注释。

## 提交消息规范

我们使用[约定式提交](https://www.conventionalcommits.org/)规范来格式化提交消息。每个提交消息应该包含一个类型和一个主题：

```
<类型>: <描述>
```

类型可以是：

- `feat`: 新功能
- `fix`: Bug修复
- `docs`: 文档更改
- `style`: 不影响代码含义的更改（空格、格式化等）
- `refactor`: 既不修复错误也不添加功能的代码更改
- `perf`: 提高性能的代码更改
- `test`: 添加或修正测试
- `chore`: 对构建过程或辅助工具的更改

## 问题和帮助

如果您在开发过程中遇到任何问题，请在GitHub Issues中提问，或联系项目维护者。 