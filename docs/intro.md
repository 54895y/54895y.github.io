---
title: 插件 Wiki
---

这里是 Matrix 系列插件的统一文档站点。

当前已经收录：

- [MatrixLib](/docs/matrixlib)
- [MatrixAgentSkills](/docs/matrix-agent-skills/overview)
- [MatrixAuth](/docs/matrixauth/overview)
- [MatrixCook](/docs/matrixcook/overview)
- [MatrixShop](/docs/matrixshop)
- [MatrixStorage](/docs/matrixstorage)

## 插件首页导航

| 插件 | 概览 | 最新发布 | 开发者 API | bStats |
| --- | --- | --- | --- | --- |
| MatrixLib | [进入](/docs/matrixlib) | [1.5.0](/docs/matrixlib/release-notes-1-5-0) | [进入](/docs/matrixlib/developer-api) | [进入](/docs/matrixlib/bstats-and-telemetry) |
| MatrixAuth | [进入](/docs/matrixauth/overview) | [1.1.0](/docs/matrixauth/release-notes-1-1-0) | [进入](/docs/matrixauth/developer-api) | [进入](/docs/matrixauth/bstats-and-telemetry) |
| MatrixCook | [进入](/docs/matrixcook/overview) | [1.2.0](/docs/matrixcook/release-notes-1-2-0) | [进入](/docs/matrixcook/developer-api) | [进入](/docs/matrixcook/bstats-and-telemetry) |
| MatrixShop | [进入](/docs/matrixshop) | [1.7.0](/docs/matrixshop/release-notes-1-7-0) | [进入](/docs/matrixshop/developer-api) | [进入](/docs/matrixshop/bstats-and-telemetry) |
| MatrixStorage | [进入](/docs/matrixstorage) | [1.1.0](/docs/matrixstorage/release-notes-1-1-0) | [进入](/docs/matrixstorage/developer-api) | [进入](/docs/matrixstorage/bstats-and-telemetry) |

## 当前插件覆盖

- MatrixLib：共享前置、稳定 API、更新器、遥测、开发者文档
- MatrixAuth：账号档案、挂钩状态、稳定 API、遥测、开发者文档
- MatrixCook：锅具/配方/燃料、稳定 API、遥测、开发者文档
- MatrixShop：商店模块、稳定 API、仓库 SPI、遥测、开发者文档
- MatrixStorage：仓储状态、稳定 API、桥接、遥测、开发者文档

## 文档约定

- 每个插件单独放在 `docs/{plugin}/` 目录下。
- 文档内容以当前源码、默认配置和默认资源文件为准。
- 如果代码已经和旧文档分叉，以代码行为为准，并在对应页面里注明迁移差异。
- 首页只做索引，具体使用说明放到插件各自章节。

## 推荐阅读顺序

首次接触某个插件时，建议按这个顺序阅读：

1. 概览
2. 安装 / 快速开始
3. 配置结构
4. 命令与权限
5. 常见问题

如果你想直接把 Matrix 系列配置能力交给 agent，也可以先看：

- [MatrixAgentSkills 总览](/docs/matrix-agent-skills/overview)
- [直接发给 Agent 的示例](/docs/matrix-agent-skills/direct-link-examples)
