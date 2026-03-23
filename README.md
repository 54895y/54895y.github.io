# Matrix Docs

`D:\Matrix\Docs` 是 Matrix 系列插件的统一 Docusaurus 文档站。

当前已收录：

- MatrixAuth
- MatrixShop

## 当前结构

- `docs/plugins.mdx`：插件列表
- `docs/intro.md`：站点总览
- `docs/matrixauth/`：MatrixAuth 文档
- `docs/matrixshop/`：MatrixShop 文档
- `src/pages/index.tsx`：首页
- `docusaurus.config.ts`：站点配置
- `sidebars.ts`：侧边导航

## GitHub Pages

当前站点发布到：

- [54895y/54895y.github.io](https://github.com/54895y/54895y.github.io.git)

默认配置：

- `url = https://54895y.github.io`
- `baseUrl = /`
- `deploymentBranch = main`

## 本地开发

```powershell
cd D:\Matrix\Docs
npm install
npm start
```

## 构建

```powershell
cd D:\Matrix\Docs
npm run build
```
