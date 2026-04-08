---
title: 开发说明
---

## 仓库结构

当前代码和文档拆分为两部分：

- 主插件工程：`MatrixAuth/Code`
- 文档站点：`Docs`

GitHub 侧的 MatrixAuth 仓库当前约定：

- `main`：只保留主插件 `Code/`
- `codex/easybot-assets`：保存 EasyBot 扩展和图片模板

## 主插件关键文件

- `src/main/kotlin/com/y54895/matrixauth/MatrixAuth.kt`：插件生命周期、服务初始化、命令注册
- `src/main/kotlin/com/y54895/matrixauth/data/DataManager.kt`：数据库读写与档案管理
- `src/main/kotlin/com/y54895/matrixauth/listener/LoginListener.kt`：登录预处理主链路
- `src/main/kotlin/com/y54895/matrixauth/command/AccountCommand.kt`：玩家命令
- `src/main/kotlin/com/y54895/matrixauth/command/MatrixAuthAdminSupport.kt`：管理员命令
- `src/main/kotlin/com/y54895/matrixauth/hook/MatrixAuthPlaceholderExpansion.kt`：PlaceholderAPI 变量扩展
- `src/main/kotlin/com/y54895/matrixauth/util/RuntimeLibraryBootstrap.kt`：精简版运行时依赖入口
- `src/main/kotlin/com/y54895/matrixauth/service/EasyBotCompatHttpService.kt`：EasyBot HTTP 查询接口
- `src/main/kotlin/com/y54895/matrixauth/util/SchedulerBridge.kt`：Folia 调度兼容

## 精简版实现

当前主 jar 已改成精简发行：

- `build.gradle.kts` 不再把 Gson、HikariCP、SQLite 驱动、MySQL 驱动直接打进包。
- 运行时依赖由 TabooLib 注解自动下载。
- SQLite 和 MySQL 驱动按实际存储类型分别触发加载。

这意味着构建产物体积会很小，但首次启动需要联网。

## 数据库表

当前核心表：

| 表名 | 用途 |
| --- | --- |
| `matrixauth_players` | 玩家基础记录，保存默认模式、历史 UUID、owner_id |
| `matrixauth_profiles` | 档案主体，保存档案名、当前激活账号类型、时间戳 |
| `matrixauth_profile_accounts` | 档案绑定账号，保存各类型账号名和 UUID |

## Docusaurus 站点

文档站点工程位于 `Docs`。

关键文件：

- `docusaurus.config.ts`
- `sidebars.ts`
- `src/pages/index.tsx`

当前站点按 GitHub Pages 用户站点配置：

- 仓库：[MatrixPlugin/matrixplugin.github.io](https://github.com/MatrixPlugin/matrixplugin.github.io.git)
- `url = https://matrixplugin.github.io`
- `baseUrl = /`

## 本地构建

主插件：

```powershell
cd D:\Matrix\MatrixAuth\Code
.\gradlew.bat build
```

文档站点：

```powershell
cd D:\Matrix\Docs
npm run build
```
