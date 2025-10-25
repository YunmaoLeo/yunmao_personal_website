# 🚀 快速开始指南

## 第一步：安装依赖

```bash
npm install
```

这将安装所有必需的包，包括：
- React & React DOM
- TypeScript
- Three.js & React Three Fiber
- Framer Motion（动画库）
- Tailwind CSS（样式框架）
- Lucide React（图标库）

## 第二步：启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开 http://localhost:3000

## 第三步：自定义内容

### 更新个人信息

编辑 `src/data/skills.ts`：

```typescript
export const personalInfo = {
  name: 'Lejie Liu',
  email: 'lejie.liu.gr@dartmouth.edu',
  title: 'Backend Developer',
  tagline: 'Building scalable systems and real-time applications',
};
```

### 更新社交媒体链接

编辑这些文件中的链接：
- `src/components/Hero/HeroContent.tsx`
- `src/components/Footer/Footer.tsx`

将 GitHub 和 LinkedIn 的占位链接替换为你的真实链接。

### 添加更多项目或经历

- **添加项目**: 编辑 `src/data/projects.ts`
- **添加实习经历**: 编辑 `src/data/experiences.ts`
- **修改技能**: 编辑 `src/data/skills.ts` 中的 `skillCategories`

## 第四步：构建生产版本

```bash
npm run build
```

构建完成后，`dist` 文件夹将包含优化后的生产文件。

## 第五步：部署

### 选项 A: Vercel（推荐）

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 部署：
```bash
vercel
```

### 选项 B: Netlify

1. 安装 Netlify CLI：
```bash
npm i -g netlify-cli
```

2. 构建并部署：
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 🎨 关键特性说明

### 1. 3D 粒子背景
- 位于 `src/components/Hero/Hero3DBackground.tsx`
- 使用 Three.js 和 React Three Fiber
- 鼠标交互会影响粒子运动
- 自动优化性能

### 2. 动画效果
- 使用 Framer Motion 库
- 所有卡片都有进场动画
- 悬停效果使用 GPU 加速

### 3. 响应式设计
- 移动端优先
- 使用 Tailwind CSS 的响应式类
- 在小屏幕上自动调整布局

### 4. 色彩主题
遵循指定的色卡：
- Primary (#2EC4B6) - 青绿色
- Secondary (#FF9F1C) - 橙色
- Accent (#FFBF69) - 浅橙色
- Surface (#CBF3F0) - 浅青色
- Background (#FFFFFF) - 白色

## 🔧 常见问题

### Q: 如何调整粒子数量？

编辑 `src/components/Hero/Hero3DBackground.tsx` 中的 `particlesCount` 变量：

```typescript
const particlesCount = 2000; // 减少这个数字可以提高性能
```

### Q: 如何禁用 3D 效果？

如果你想要更简单的背景，可以在 `src/components/Hero/Hero.tsx` 中注释掉 Canvas 部分。

### Q: 如何更改颜色主题？

编辑 `tailwind.config.js` 中的颜色定义：

```javascript
colors: {
  primary: '#2EC4B6',
  secondary: '#FF9F1C',
  // ... 更改这些值
}
```

## 📚 进一步学习

- [React 文档](https://react.dev)
- [Three.js 文档](https://threejs.org/docs/)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

## 💡 提示

1. **开发时启用热重载**: Vite 默认启用，修改代码会自动刷新
2. **检查控制台**: 打开浏览器开发者工具查看任何错误
3. **性能**: 如果 3D 效果卡顿，尝试减少粒子数量
4. **自定义**: 所有组件都使用 TypeScript，有完整的类型提示

---

如有问题，请查看 README.md 或提交 issue。

