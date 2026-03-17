# 🚀 快速开始 - 3 分钟部署

## 第 1 分钟：初始化 Git

打开命令行，运行：

```bash
cd "D:\我的世界\Minecraft代码\MatrixShop\matrixshop-docs"
git init
git config --global user.name "54895y"
git config --global user.email "54895y@example.com"
```

## 第 2 分钟：提交代码

```bash
git add .
git commit -m "Initial commit: MatrixShop documentation"
```

## 第 3 分钟：推送到 GitHub

```bash
# 先在 GitHub 创建仓库
# 访问: https://github.com/new
# 仓库名: 54895y.github.io

git remote add origin https://github.com/54895y/54895y.github.io.git
git branch -M main
git push -u origin main
```

## 部署到 GitHub Pages

1. 访问 https://github.com/54895y/54895y.github.io/settings/pages
2. Source 选择 **GitHub Actions**
3. Branch 选择 **main**
4. 点击 **Save**
5. 等待 2-5 分钟
6. 访问 https://54895y.github.io 查看网站

## 完成！🎉

你的文档网站已经部署成功！

---

## 自动部署

以后每次修改文档后，只需运行：

```bash
git add .
git commit -m "更新说明"
git push origin main
```

GitHub Actions 会自动部署！
