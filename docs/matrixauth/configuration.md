---
title: 配置说明
---

## `config.yml`

这是主配置文件，负责默认登录模式、数据库、Mojang API、兼容开关和占位符显示文本。

| 键 | 默认值 | 说明 |
| --- | --- | --- |
| `default-mode` | `OFFLINE` | 新玩家的基础默认登录模式 |
| `mojang-api.base-url` | `https://api.mojang.com` | Mojang API 地址 |
| `mojang-api.session-url` | `https://sessionserver.mojang.com` | Session Server 地址 |
| `mojang-api.timeout` | `5` | 请求超时，单位秒 |
| `mojang-api.cache-ttl` | `600` | Mojang 查询缓存秒数 |
| `mojang-api.api-fallback` | `OFFLINE` | 验证失败时的回退策略 |
| `storage.type` | `SQLITE` | 存储类型，`SQLITE` 或 `MYSQL` |
| `storage.sqlite.file` | `data/matrixauth.db` | SQLite 文件路径 |
| `storage.mysql.*` | 见默认配置 | MySQL 连接参数 |
| `storage.pool.*` | `4 / 1 / 10000` | HikariCP 连接池参数 |
| `debug` | `false` | 是否输出调试日志 |
| `placeholder.bedrock` | `&b基岩` | `%matrixauth_type%` 基岩显示文本 |
| `placeholder.premium` | `&a正版` | `%matrixauth_type%` 正版显示文本 |
| `placeholder.offline` | `&e离线` | `%matrixauth_type%` 离线显示文本 |
| `account-switch.kick-message` | 内置文案 | 切换账号后踢出提示 |
| `bedrock.preserve-source-identity` | `true` | 保留 Floodgate/Geyser 原始基岩身份 |
| `compatibility.mcmmo.sync-profile-data` | `true` | 登录时尝试同步 mcMMO 档案数据 |

### `api-fallback`

- `OFFLINE`：Mojang API 异常时退回离线逻辑。
- `KICK`：Mojang API 异常时拒绝登录。

## `settings/guide.yml`

这个文件控制玩家向导和入服提醒。

| 键 | 默认值 | 说明 |
| --- | --- | --- |
| `enabled` | `true` | 向导系统总开关 |
| `reminder-enabled` | `true` | 是否发送入服提醒 |
| `auto-send-on-join` | `true` | 玩家加入后是否自动发送 |
| `clickable-actions` | `true` | Java 版是否启用聊天点击动作 |
| `join-delay-ticks` | `40` | 入服后延迟多少 tick 再提醒 |
| `remind-when-profiles-empty` | `true` | 没有档案时是否提醒 |
| `remind-when-profiles-exist` | `true` | 已有档案时是否提醒 |

行为规则：

- Java 玩家会收到可点击的 `/account guide` 或 `/matrixauth` 相关提示。
- 基岩玩家只收到纯文本指令提示。
- 关闭 `clickable-actions` 后，Java 玩家也会退回纯文本提示。

## `settings/easybot.yml`

这个文件控制插件侧 EasyBot HTTP 兼容接口。

| 键 | 默认值 | 说明 |
| --- | --- | --- |
| `enabled` | `false` | 是否启用 HTTP 查询接口 |
| `host` | `127.0.0.1` | 监听地址 |
| `port` | `26992` | 监听端口 |
| `token` | `matrixauth-easybot-token` | EasyBot 查询令牌 |

如果 EasyBot 不和 Minecraft 在同一台机器上，`host` 不能继续使用 `127.0.0.1`。

## `messages.yml`

这个文件负责：

- 玩家提示
- 向导文案
- 帮助页
- 命令反馈
- 点击提示文本

如果你需要改玩家看到的所有文案，优先从 `messages.yml` 下手。
