# [滚动条编辑器](https://lvzhenbo.github.io/scrollbar-editor/)

[Scrollbar.app](https://github.com/henripar/scrollbar) 的中文优化版，在原版的基础上添加了**自定义选择器名称**、**交汇处颜色**、**滚动条宽度标准CSS**以及默认自动跟随系统主题功能（可自己手动切换，暂时不加入持久化）。

## 推荐 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (并且禁用 Vetur ，推荐卸载)

额外插件：[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) + [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) + [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

## 项目设置

> 推荐使用pnpm

```sh
pnpm install
```

### 开发（编译和热重载）

```sh
pnpm dev
```

### 预览

```sh
pnpm preview
```

### 生产（类型检查、编译和最小化）

```sh
pnpm build
```

### 生产（只编译）

```sh
pnpm build-only
```

### 类型检查

```sh
pnpm type-check
```

### [ESLint](https://eslint.org/) 格式化

```sh
pnpm lint
```

### [Prettier](https://prettier.io/) 格式化

```sh
pnpm format
```

## 许可证

[MIT](https://opensource.org/licenses/MIT)
