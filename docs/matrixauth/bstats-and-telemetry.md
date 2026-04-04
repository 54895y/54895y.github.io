---
title: MatrixAuth bStats 与遥测
description: MatrixAuth 当前 bStats 图表与预留指标位。
---

# MatrixAuth bStats 与遥测

- Plugin ID: `30578`
- 注册入口：`MatrixLib` `MatrixBStats`

## 当前图表

| Chart ID | 类型 | 含义 |
| --- | --- | --- |
| `default_login_mode` | SimplePie | 默认登录模式分布 |
| `storage_backend` | SimplePie | 当前配置存储后端 |
| `api_fallback` | SimplePie | Mojang API 回退策略 |
| `easybot_http` | SimplePie | EasyBot HTTP 接口是否启用 |
| `mcmmo_profile_sync` | SimplePie | mcMMO 档案同步是否启用 |
| `bedrock_identity_policy` | SimplePie | 基岩身份保留策略 |
| `hook_count` | SingleLineChart | 当前启用挂钩数量 |
| `enabled_hooks` | AdvancedPie | 当前启用挂钩分布 |

## 预留图表位

| 预留 Chart ID | 计划用途 |
| --- | --- |
| `profile_storage_mode` | 统计未来档案存储分层策略 |
| `active_account_types` | 统计档案当前激活账号类型分布 |
| `guide_delivery_mode` | 统计引导提示的文本 / 点击 / 指令分发模式 |
