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

项目将在 http://localhost:5173 启动（如果端口被占用，会自动使用其他端口）

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist/` 目录

### 预览生产构建

```bash
npm run preview
```

## 使用说明

### 页面浏览

1. **启动项目**

   ```bash
   npm install
   npm run dev
   ```
2. **访问页面**

   - 在浏览器中打开显示的本地地址（通常是 http://localhost:5173）
   - 页面会自动加载并显示团队库使用指南
3. **浏览内容**

   - 页面采用垂直滚动布局，包含 11 个教学 Frame
   - 从上到下依次展示团队库的各个功能模块
   - 每个 Frame 都有清晰的标题和说明文字

### 页面内容导航

页面从上到下包含以下内容：

1. **开始提示** - "Start here ↓" 引导文字
2. **Frame 01** - 介绍团队库的概念和作用
3. **Frame 02** - 如何编辑团队颜色样式
4. **Frame 03** - 如何创建新的颜色样式
5. **Frame 04** - 如何使用颜色样式
6. **Frame 05** - 如何编辑文本样式
7. **Frame 06** - 如何创建新的文本样式
8. **Frame 07** - 如何使用文本样式
9. **Frame 08** - 如何创建组件
10. **Frame 09** - 如何使用组件
11. **Frame 10** - 如何发布团队库
12. **Frame 11** - 如何在其他文件中使用团队库

### 开发调试

#### 查看组件结构

所有组件都有语义化的 ID，可以通过浏览器开发者工具轻松定位：

```javascript
// 在浏览器控制台中
document.getElementById('frame-01-container')  // 获取 Frame 01 容器
document.getElementById('text-01-title-display')  // 获取 Frame 01 标题
```

#### 修改样式

如需修改样式，可以编辑 `src/pages/TeamLibraryPage.tsx` 文件：

```tsx
// 示例：修改标题颜色
<h1
  id="text-01-title-display"
  style={{
    // ... 其他样式
    color: '#FF0000',  // 修改为红色
  }}
>
  Build your own team library
</h1>
```

#### 添加新内容

在 `TeamLibraryPage.tsx` 中添加新的元素：

```tsx
export default function TeamLibraryPage() {
  return (
    <div id="page-teamlibrary-container" ...>
      {/* 现有内容 */}
    
      {/* 添加新内容 */}
      <div
        id="custom-element-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '6000px',  // 在最后一个 Frame 之后
          width: '685px',
          height: '200px',
        }}
      >
        <p>自定义内容</p>
      </div>
    </div>
  );
}
```

### 部署说明

#### 构建项目

```bash
npm run build
```

本地运行

```

npm install
npm run dev
```

#### 部署到服务器

将 `dist/` 目录中的所有文件上传到 Web 服务器即可。

#### 部署到 Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

#### 部署到 Netlify

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 部署
netlify deploy --prod --dir=dist
```

### 常见问题

#### Q: 图片无法显示？

A: 确保所有图片都在 `public/` 目录中，并且路径以 `/` 开头（如 `/01-background.png`）

#### Q: 样式不生效？

A: 检查 Tailwind CSS 是否正确配置，确保 `src/index.css` 包含了 Tailwind 指令

#### Q: 端口被占用？

A: Vite 会自动尝试其他端口，查看终端输出的实际端口号

#### Q: 如何修改页面尺寸？

A: 修改 `TeamLibraryPage.tsx` 中容器的 `width` 和 `height` 属性，以及各个 Frame 的位置

### 性能优化建议

1. **图片优化**

   - PNG 图片可以使用工具压缩（如 TinyPNG）
   - 考虑使用 WebP 格式以减小文件大小
2. **代码分割**

   - 如果页面变大，可以将各个 Frame 拆分为独立组件
   - 使用 React.lazy() 实现懒加载
3. **缓存策略**

   - 配置适当的 HTTP 缓存头
   - 使用 CDN 加速静态资源加载

### 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ 不支持 IE 11

### 移动端适配

当前项目为固定布局（685px 宽），在移动端浏览时：

- 建议横屏查看以获得最佳体验
- 或者修改代码实现响应式布局

### 技术支持

如遇到问题，请查看：

- `PROJECT_SUMMARY.md` - 项目详细总结
- `CHECKLIST.md` - 完成检查清单
- `DELIVERY.md` - 交付说明文档

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
