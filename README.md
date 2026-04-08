# Matrix Docs

`matrixplugin.github.io` 是 Matrix 系列插件的统一 Docusaurus 文档站。

当前已收录：

- MatrixAuth
- MatrixCook
- MatrixShop

## 当前结构

- `docs/plugins.mdx`：插件列表
- `docs/intro.md`：站点总览
- `docs/matrixauth/`：MatrixAuth 文档
- `docs/matrixcook/`：MatrixCook 文档
- `docs/matrixshop/`：MatrixShop 文档
- `src/pages/index.tsx`：首页
- `src/pages/ai-search.js`：AI 搜索页
- `docusaurus.config.ts`：站点配置
- `sidebars.ts`：侧边导航

## GitHub Pages

当前站点发布到：

- [MatrixPlugin/matrixplugin.github.io](https://github.com/MatrixPlugin/matrixplugin.github.io.git)

默认配置：

- `url = https://matrixplugin.github.io`
- `baseUrl = /`
- `deploymentBranch = main`

## 环境要求

- `Node.js >= 20`
- `npm >= 10`

## 本地开发

```bash
cd /www/codex-work/matrixplugin.github.io
npm install
npm start
```

## 构建

```bash
cd /www/codex-work/matrixplugin.github.io
npm run build
```

## 常用命令

```bash
npm run start
npm run build
npm run serve
npm run typecheck
```
