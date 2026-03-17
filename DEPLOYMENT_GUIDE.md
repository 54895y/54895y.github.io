# 🚀 GitHub Pages 完整部署指南

## 前提条件

- 已安装 Git
- 已创建 GitHub 账号
- 已创建仓库 `https://github.com/54895y/54895y.github.io`

---

## 第一步：初始化 Git 仓库

### 1. 打开命令行

按 `Win + R`，输入 `cmd`，按回车

### 2. 进入项目目录

```bash
cd "D:\我的世界\Minecraft代码\MatrixShop\matrixshop-docs"
```

### 3. 初始化 Git 仓库

```bash
git init
```

### 4. 配置 Git 用户信息

```bash
git config --global user.name "54895y"
git config --global user.email "54895y@example.com"
```

> **注意**: 将 `54895y@example.com` 替换为你 GitHub 账号的邮箱

---

## 第二步：添加文件并提交

### 1. 查看当前状态

```bash
git status
```

### 2. 添加所有文件

```bash
git add .
```

### 3. 提交文件

```bash
git commit -m "Initial commit: MatrixShop documentation with GitHub Pages setup"
```

---

## 第三步：连接远程仓库

### 1. 创建 GitHub 仓库

1. 访问 https://github.com/new
2. Repository name: `54895y.github.io`
3. Description: `MatrixShop Documentation`
4. 选择 **Public**
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 2. 添加远程仓库

```bash
git remote add origin https://github.com/54895y/54895y.github.io.git
```

### 3. 推送代码到 GitHub

```bash
git branch -M main
git push -u origin main
```

> **注意**: 如果提示输入用户名和密码，请使用 GitHub Personal Access Token

---

## 第四步：启用 GitHub Pages

### 1. 访问仓库设置

1. 打开 https://github.com/54895y/54895y.github.io
2. 点击右上角的 **Settings** 标签

### 2. 配置 Pages

1. 在左侧菜单中找到 **Pages**
2. 点击 **Pages**
3. 在 "Build and deployment" 部分:
   - Source: **GitHub Actions**
   - Branch: **main**
4. 点击 **Save**

### 3. 等待部署

- 首次部署需要 2-5 分钟
- 部署完成后会显示网站 URL: `https://54895y.github.io`

---

## 第五步：验证部署

### 1. 访问网站

打开浏览器，访问: **https://54895y.github.io**

### 2. 检查网站内容

确认以下内容正常显示:
- 主页 Hero 区域
- MatrixShop 卡片
- 更多插件卡片
- 技术栈部分
- 快速开始部分

---

## 第六步：后续更新

### 自动部署

每次向 `main` 分支推送以下文件的更改时，都会自动部署:

```bash
# 修改文件后
git add .
git commit -m "Update documentation"
git push origin main
```

### 查看部署状态

1. 访问 https://github.com/54895y/54895y.github.io/actions
2. 查看最新的工作流运行状态
3. 点击工作流可以查看详细日志

---

## 常见问题

### 1. 网站无法访问

**问题**: 访问 https://54895y.github.io 显示 404

**解决方案**:
- 等待 5-10 分钟让 GitHub Pages 更新
- 清除浏览器缓存
- 检查 GitHub Pages 设置是否正确

### 2. Git Push 失败

**问题**: `fatal: repository not found`

**解决方案**:
- 检查仓库 URL 是否正确
- 确认仓库是公开的
- 检查网络连接

### 3. 权限问题

**问题**: `Permission denied (publickey)`

**解决方案**:
- 配置 SSH 密钥或使用 HTTPS
- 使用 Personal Access Token 替代密码

### 4. 内容未更新

**问题**: 网站内容没有显示最新更改

**解决方案**:
- 等待 1-2 分钟让 GitHub Pages 更新
- 检查 GitHub Actions 是否成功完成
- 清除浏览器缓存

---

## 快速命令参考

```bash
# 初始化
cd "D:\我的世界\Minecraft代码\MatrixShop\matrixshop-docs"
git init
git config --global user.name "54895y"
git config --global user.email "54895y@example.com"

# 添加和提交
git add .
git commit -m "Initial commit"

# 连接远程仓库
git remote add origin https://github.com/54895y/54895y.github.io.git
git branch -M main
git push -u origin main
```

---

## 部署成功后

部署成功后，你将拥有:
- ✅ 网站 URL: https://54895y.github.io
- ✅ 自动部署功能
- ✅ GitHub 仓库管理
- ✅ 文档版本控制

祝你使用愉快！🎉
