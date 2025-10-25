# 🌐 部署指南

本文档介绍如何将你的个人网站部署到各种托管平台。

## 准备工作

确保你的项目可以成功构建：

```bash
npm run build
```

如果构建成功，你会在 `dist` 文件夹中看到生成的文件。

---

## 选项 1: Vercel（推荐）⭐

Vercel 是最简单且免费的部署方式，特别适合 React 应用。

### 方法 A: 使用 Vercel CLI

1. 安装 Vercel CLI：
```bash
npm install -g vercel
```

2. 登录（首次使用）：
```bash
vercel login
```

3. 在项目根目录运行：
```bash
vercel
```

4. 按照提示操作，Vercel 会自动检测 Vite 项目并配置。

5. 后续更新只需运行：
```bash
vercel --prod
```

### 方法 B: 使用 Vercel 网页界面

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub/GitLab/Bitbucket 登录
3. 点击 "Import Project"
4. 选择你的仓库
5. Vercel 会自动检测设置并部署

**优点**:
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动 Git 集成（每次 push 自动部署）
- ✅ 免费域名 (yourproject.vercel.app)

---

## 选项 2: Netlify

Netlify 也是很受欢迎的托管平台，功能强大且免费。

### 方法 A: 使用 Netlify CLI

1. 安装 Netlify CLI：
```bash
npm install -g netlify-cli
```

2. 登录：
```bash
netlify login
```

3. 初始化站点：
```bash
netlify init
```

4. 部署：
```bash
npm run build
netlify deploy --prod --dir=dist
```

### 方法 B: 拖放部署

1. 构建项目：
```bash
npm run build
```

2. 访问 [app.netlify.com/drop](https://app.netlify.com/drop)
3. 将 `dist` 文件夹拖放到页面上

### 方法 C: Git 集成

1. 访问 [netlify.com](https://netlify.com)
2. 点击 "Add new site" → "Import an existing project"
3. 连接你的 Git 仓库
4. 设置构建命令：`npm run build`
5. 设置发布目录：`dist`

**优点**:
- ✅ 自动 HTTPS
- ✅ 持续部署
- ✅ 表单处理
- ✅ 无服务器函数

---

## 选项 3: GitHub Pages

使用 GitHub Pages 可以免费托管静态网站。

### 步骤：

1. 安装 `gh-pages` 包：
```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 中添加：
```json
{
  "homepage": "https://你的用户名.github.io/仓库名",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. 修改 `vite.config.ts`：
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/仓库名/', // 替换为你的仓库名
})
```

4. 部署：
```bash
npm run deploy
```

5. 在 GitHub 仓库设置中：
   - 进入 Settings → Pages
   - Source 选择 `gh-pages` 分支

**优点**:
- ✅ 完全免费
- ✅ 与 GitHub 深度集成
- ✅ 简单直接

**缺点**:
- ❌ 需要手动运行部署命令
- ❌ 不支持自定义服务器逻辑

---

## 选项 4: AWS S3 + CloudFront

适合需要更多控制权的生产环境。

### 步骤概览：

1. 创建 S3 bucket
2. 启用静态网站托管
3. 上传 `dist` 文件夹内容
4. 设置 CloudFront 分发
5. 配置 Route 53（可选，用于自定义域名）

详细教程请参考 [AWS 文档](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

**优点**:
- ✅ 完全控制
- ✅ 高性能
- ✅ 可扩展

**缺点**:
- ❌ 需要 AWS 知识
- ❌ 可能产生费用（但通常很低）

---

## 选项 5: Firebase Hosting

Google 的 Firebase 提供快速且可靠的托管服务。

### 步骤：

1. 安装 Firebase CLI：
```bash
npm install -g firebase-tools
```

2. 登录：
```bash
firebase login
```

3. 初始化项目：
```bash
firebase init hosting
```

选择：
- Public directory: `dist`
- Configure as single-page app: Yes
- Set up automatic builds: No

4. 部署：
```bash
npm run build
firebase deploy
```

**优点**:
- ✅ 免费 SSL
- ✅ 全球 CDN
- ✅ 易于使用

---

## 自定义域名配置

### Vercel:
1. 在 Vercel 项目设置中进入 "Domains"
2. 添加你的域名
3. 在域名注册商处添加 DNS 记录：
   - 类型: CNAME
   - 名称: www（或 @）
   - 值: cname.vercel-dns.com

### Netlify:
1. 在 Netlify 站点设置中进入 "Domain management"
2. 添加自定义域名
3. 按照提示配置 DNS

### GitHub Pages:
1. 在仓库根目录创建 `public/CNAME` 文件
2. 文件内容为你的域名（如 `example.com`）
3. 在域名注册商配置 A 记录指向 GitHub 的 IP

---

## 环境变量

如果你需要使用环境变量（如 API 密钥）：

### Vercel:
在项目设置 → Environment Variables 中添加

### Netlify:
在站点设置 → Build & deploy → Environment 中添加

### 本地开发:
创建 `.env.local` 文件：
```
VITE_API_KEY=your_key_here
```

在代码中使用：
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## 性能优化提示

1. **启用 Gzip/Brotli 压缩**（大多数平台默认启用）
2. **配置缓存头**
3. **使用 CDN**（Vercel 和 Netlify 自动提供）
4. **图片优化**：使用 WebP 格式
5. **延迟加载**：对非关键资源使用 lazy loading

---

## 持续部署（CI/CD）

### 使用 GitHub Actions 自动部署到 Vercel:

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 监控和分析

部署后，考虑添加：

1. **Google Analytics**: 跟踪访问者
2. **Vercel Analytics**: 性能监控（Vercel 内置）
3. **Sentry**: 错误追踪
4. **Lighthouse CI**: 性能测试

---

## 故障排查

### 问题: 页面刷新后 404

**解决方案**: 配置服务器重定向所有路由到 `index.html`

对于 Netlify，创建 `public/_redirects`：
```
/*    /index.html   200
```

对于 Vercel，创建 `vercel.json`：
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### 问题: 3D 效果不工作

检查浏览器控制台是否有 WebGL 错误。某些旧设备可能不支持 WebGL。

### 问题: 构建失败

1. 清理缓存：`rm -rf node_modules package-lock.json && npm install`
2. 检查 Node 版本：确保使用 Node 18+
3. 查看构建日志获取详细错误信息

---

选择最适合你需求的部署方式。对于个人项目，**推荐使用 Vercel**，因为它配置简单且功能强大！

