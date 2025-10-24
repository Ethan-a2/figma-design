# Figma Team Library UI 还原项目

这是一个严格按照 Figma 设计稿还原的 React 项目，展示了团队库（Team Library）的使用指南。

## 项目信息

- **Figma 设计链接**: https://www.figma.com/design/aUkzYLVf5DcZHsHeLRmKrC/Bruce-s-team-library?node-id=0-1&t=CiVjB2kqzfxZophB-1
- **技术栈**: Vite + React + TypeScript + Tailwind CSS
- **设备适配**: 仅适配安卓设备

## 项目结构

```
./
├── src/
│   ├── pages/              # 页面组件目录
│   │   └── TeamLibraryPage.tsx  # 主页面组件
│   ├── App.tsx             # 主应用组件
│   ├── main.tsx            # 入口文件
│   └── index.css           # 全局样式
├── public/                 # 图片资源目录（54张图片）
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 安装和运行

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 http://localhost:5173 启动

### 构建生产版本

```bash
npm run build
```

## 设计还原说明

### 页面结构

页面包含 11 个主要 Frame，每个 Frame 尺寸为 685x492 像素：

1. **Frame 01** - Build your own team library（介绍团队库）
2. **Frame 02** - Edit team color styles（编辑团队颜色样式）
3. **Frame 03** - Create color styles（创建颜色样式）
4. **Frame 04** - Use color styles（使用颜色样式）
5. **Frame 05** - Edit text styles（编辑文本样式）
6. **Frame 06** - Create text styles（创建文本样式）
7. **Frame 07** - Use text styles（使用文本样式）
8. **Frame 08** - Create components（创建组件）
9. **Frame 09** - Use components（使用组件）
10. **Frame 10** - Publish your Team Library（发布团队库）
11. **Frame 11** - Using your Team Library（使用团队库）

### 图片资源清单

所有图片资源已下载到 `public/` 目录，共 54 张：

#### 背景图片（PNG）
- `01-background.png` - Frame 01 左侧背景图
- `02-background.png` - Frame 02 颜色样本背景
- `03-background.png` - Frame 03 颜色样本背景
- `04-background.png` - Frame 04 颜色样本背景
- `05-background.png` - Frame 05 文本样本背景
- `06-background.png` - Frame 06 文本样本背景
- `07-background.png` - Frame 07 文本样本背景
- `08-background.png` - Frame 08 组件背景
- `09-background-6fc1ae.png` - Frame 09 按钮背景（裁剪）
- `10-background-1-581ae4.png` - Frame 10 发布说明背景1（裁剪）
- `10-background-2.png` - Frame 10 发布说明背景2
- `11-background.png` - Frame 11 团队库使用背景

#### SVG 图标和装饰
- `02-bg-svg.svg` 到 `09-bg-svg.svg` - 各 Frame 的背景 SVG
- `02-arrow.svg` 到 `09-arrow.svg` - 指示箭头
- `03-tip-bg.svg`, `08-tip-bg.svg`, `10-tip-bg.svg` - 提示框背景
- `cursor-default.svg`, `cursor-hand-*.svg` - 光标图标
- `icon-*.svg` - 各种小图标

### 样式规范

#### 字体
- **Inter**: 主要用于标题和正文
  - 标题: 700 weight, 20px-38px
  - 正文: 400 weight, 11px-14px
- **Work Sans**: 用于文本样式示例
- **Droid Sans**: 用于小文本示例

#### 颜色
- **主色调**: 
  - Fuschia: #EF5DA8, #F178B6, #FCDDEC
  - Iris: #5D5FEF, #7879F1, #A5A6F6
- **文本颜色**: 
  - 主文本: #000000
  - 次要文本: rgba(0, 0, 0, 0.8)
  - 链接/提示: #007BE5
- **背景色**: 
  - 白色: #FFFFFF
  - 浅灰: #FAFAFA

#### 布局
- 使用 `position: absolute` 实现像素级精确定位
- 所有元素的 top、left、width、height 严格遵循 Figma 数据
- 圆角、阴影、渐变等样式细节完全还原

### 组件 ID 命名规范

所有组件都设置了语义化的 ID，格式为：`类型-功能-具体动作`

示例：
- `frame-01-container` - Frame 01 容器
- `text-01-title-display` - Frame 01 标题文本
- `button-04-sample-action` - Frame 04 示例按钮
- `image-02-arrow-indicator` - Frame 02 箭头指示器

## 代码风格

- 项目结构清晰，模块化设计
- 所有组件都有唯一的语义化 ID
- 使用 Tailwind CSS + 内联样式实现精确定位
- 严格遵循 Figma 设计数据，像素级还原

## 注意事项

1. 页面中的所有图片、图标、装饰元素都使用下载的资源，未使用 CSS 或 SVG 绘制替代
2. 所有元素位置和尺寸与 Figma 设计完全一致
3. 页面容器尺寸等于 Figma 根 Frame 的尺寸
4. 控件不包含 hover、按下效果和点击高亮效果（按照 AGENTS.md 要求）

## 开发团队

- 使用 Mi Code AI 助手开发
- 基于 Figma MCP 工具自动提取设计数据
- 严格遵循设计规范和代码标准
