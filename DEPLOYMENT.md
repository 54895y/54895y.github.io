# GitHub Pages 部署指南

## 配置完成情况

✅ 已完成以下配置:

1. **Docusaurus 配置更新** (`docusaurus.config.ts`)
   - `url`: `https://54895y.github.io`
   - `baseUrl`: `/`
   - `organizationName`: `54895y`
   - `projectName`: `54895y.github.io`
   - GitHub 链接已更新

2. **GitHub Actions 工作流** (`.github/workflows/deploy.yml`)
   - 自动触发部署
   - Node.js 20 环境
   - 自动构建和部署

3. **CNAME 文件** (`static/CNAME`)
   - 设置为 `54895y.github.io`

4. **README 文档** (`README.md`)
   - 添加了部署说明

## 部署步骤

### 1. 提交代码到 GitHub

```bash
git add .
git commit -m "配置 GitHub Pages 部署"
git push origin main
```

### 2. 启用 GitHub Pages

1. 访问 https://github.com/54895y/54895y.github.io/settings/pages
2. 在 "Build and deployment" 部分:
   - Source: **GitHub Actions**
   - Branch: **main**
3. 点击 "Save"

### 3. 等待部署完成

- 首次部署可能需要 2-5 分钟
- 部署完成后，网站将自动在 https://54895y.github.io 上线

### 4. 验证部署

访问 https://54895y.github.io 查看网站是否正常显示。

## 自动部署说明

每次向 `main` 分支推送以下文件的更改时，都会自动触发部署:

- `docs/**` - 文档内容
- `src/**` - 源代码
- `static/**` - 静态资源
- `docusaurus.config.ts` - 配置文件
- `sidebars.ts` - 侧边栏配置
- `package.json` / `package-lock.json` - 依赖文件

## 手动触发部署

如果需要手动触发部署，可以:

1. 在 GitHub 仓库页面点击 "Actions" 标签
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" → "Run workflow"

## 故障排除

### 网站无法访问

1. 检查 GitHub Pages 设置是否正确
2. 确认分支设置为 `main`
3. 查看 Actions 标签页中的部署日志

### 内容未更新

1. 等待 1-2 分钟让 GitHub Pages 更新
2. 清除浏览器缓存
3. 检查 GitHub Actions 是否成功完成

### 自定义域名

如果要使用自定义域名:

1. 在 `static/CNAME` 文件中添加你的域名
2. 在 GitHub 仓库设置中配置自定义域名
3. 确保 DNS 记录正确配置
