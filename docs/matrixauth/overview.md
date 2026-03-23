---
title: MatrixAuth 概览
---

MatrixAuth 是一个基于 TabooLib 6 的混合登录与档案管理插件，目标环境是 `Minecraft 1.12+`。它支持正版、离线、基岩三类账号入口，把同一玩家的不同登录身份归并到“档案”里统一管理。

当前实现特性：

- 支持 `SQLite` 和 `MySQL`。
- 兼容 `Folia`、传统 Bukkit/Paper、混合端。
- 兼容 `Geyser` / `Floodgate` 的基岩玩家识别。
- 支持 `PlaceholderAPI`。
- 支持可选 `EasyBot` 群聊档案查询。
- 支持玩家向导、点击聊天操作、基岩版纯指令提醒。
- 支持管理员通过 `/matrixauth admin ...` 强制维护其他玩家档案。

## 当前定位

MatrixAuth 现在已经不再把玩家档案存到 EasyBot 侧。档案数据只保存在插件自己的数据库中，EasyBot 只负责查询和展示。

## 账号模型

MatrixAuth 里有三个核心概念：

- 登录模式：玩家基础记录上的默认处理策略，值为 `PREMIUM`、`OFFLINE`、`BEDROCK`。
- 档案：一个玩家可拥有多个档案，每个档案保存多种账号绑定。
- 绑定账号：档案中的具体入口，例如某个正版 UUID、离线 UUID、基岩 UUID。

切换档案，本质上是在切换“当前生效的绑定账号”。

## 主命令

玩家主命令：

- `/matrixauth`
- `/account`
- `/ma`
- `/mauth`

管理员命令入口：

- `/matrixauth admin ...`

## 精简发行说明

当前主插件已经改为精简发行，不再把 `sqlite-jdbc`、`mysql-connector-j`、`HikariCP`、`Gson` 直接打进主 jar。

这带来两个结果：

- 插件主 jar 体积会非常小。
- 首次启动时会通过 TabooLib 运行时依赖机制自动拉取所需库。

如果你的服务器是完全离线环境，需要提前让服务器在可联网环境启动一次，或者手动预热相关依赖缓存。
