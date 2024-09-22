# naive-tailwind-template

一个简单的 Naive UI + TailwindCSS 的模板

一个本人很喜欢的技术栈，[Naive UI](https://www.naiveui.com/) + [TailwindCSS](https://tailwindcss.com/)，这个模板可以让你快速开始一个项目。

使用[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) + [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)技术加持，自动导入不费力。

~~PS：只是方便自己不用每次都搭建一次而已。~~

## 推荐 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (并且禁用 Vetur ，推荐卸载) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

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
