---
title: PlaceholderAPI
---

安装 `PlaceholderAPI` 后，MatrixAuth 会注册 `%matrixauth_*%` 变量。

## 全局变量

这些变量不依赖具体玩家：

| 变量 | 说明 |
| --- | --- |
| `%matrixauth_count_total%` | 当前在线总人数 |
| `%matrixauth_count_premium%` | 当前以正版身份在线的人数 |
| `%matrixauth_count_offline%` | 当前以离线身份在线的人数 |
| `%matrixauth_count_bedrock%` | 当前以基岩身份在线的人数 |

## 玩家状态变量

这些变量依赖当前解析对象：

| 变量 | 说明 |
| --- | --- |
| `%matrixauth_type%` | 当前账号类型显示名 |
| `%matrixauth_account_type%` | `%matrixauth_type%` 的别名 |
| `%matrixauth_type_raw%` | 当前账号类型原始值 |
| `%matrixauth_account_type_raw%` | `%matrixauth_type_raw%` 的别名 |
| `%matrixauth_mode%` | 玩家基础登录模式原始值 |
| `%matrixauth_login_mode%` | `%matrixauth_mode%` 的别名 |
| `%matrixauth_mode_display%` | 玩家基础登录模式显示名 |
| `%matrixauth_login_mode_display%` | `%matrixauth_mode_display%` 的别名 |
| `%matrixauth_name%` | 当前生效账号名称 |
| `%matrixauth_account_name%` | `%matrixauth_name%` 的别名 |
| `%matrixauth_effective_name%` | `%matrixauth_name%` 的别名 |
| `%matrixauth_uuid%` | 当前生效账号 UUID |
| `%matrixauth_account_uuid%` | `%matrixauth_uuid%` 的别名 |
| `%matrixauth_effective_uuid%` | `%matrixauth_uuid%` 的别名 |
| `%matrixauth_is_bedrock%` | 是否为基岩身份 |
| `%matrixauth_is_premium%` | 是否为正版身份 |
| `%matrixauth_has_profiles%` | 是否拥有任意档案 |
| `%matrixauth_profile_count%` | 当前玩家名下档案数量 |
| `%matrixauth_has_profile%` | 当前身份是否命中一个档案 |
| `%matrixauth_profile_bound%` | `%matrixauth_has_profile%` 的别名 |

## 当前档案变量

如果当前身份命中了一个档案，这些变量会返回值；否则返回空字符串。

| 变量 | 说明 |
| --- | --- |
| `%matrixauth_profile_id%` | 当前档案 ID |
| `%matrixauth_profile_name%` | 当前档案名 |
| `%matrixauth_profile_mode%` | 当前档案激活账号类型显示名 |
| `%matrixauth_profile_mode_raw%` | 当前档案激活账号类型原始值 |
| `%matrixauth_profile_owner_id%` | 档案所属 owner_id |
| `%matrixauth_profile_owner_name%` | 档案所属 owner_name |
| `%matrixauth_profile_whitelist_verified%` | 是否已通过白名单验证 |
| `%matrixauth_profile_main_account%` | 当前档案正在生效的账号名 |
| `%matrixauth_profile_main_account_uuid%` | 当前档案正在生效的账号 UUID |
| `%matrixauth_profile_current_account%` | `%matrixauth_profile_main_account%` 的别名 |
| `%matrixauth_profile_current_account_uuid%` | `%matrixauth_profile_main_account_uuid%` 的别名 |

## 各类型绑定变量

| 变量 | 说明 |
| --- | --- |
| `%matrixauth_profile_premium_name%` | 档案绑定的正版账号名 |
| `%matrixauth_profile_premium_id%` | `%matrixauth_profile_premium_name%` 的旧别名 |
| `%matrixauth_profile_premium_uuid%` | 档案绑定的正版 UUID |
| `%matrixauth_profile_offline_name%` | 档案绑定的离线账号名 |
| `%matrixauth_profile_offline_id%` | `%matrixauth_profile_offline_name%` 的旧别名 |
| `%matrixauth_profile_offline_uuid%` | 档案绑定的离线 UUID |
| `%matrixauth_profile_bedrock_name%` | 档案绑定的基岩账号名 |
| `%matrixauth_profile_bedrock_id%` | `%matrixauth_profile_bedrock_name%` 的旧别名 |
| `%matrixauth_profile_bedrock_uuid%` | 档案绑定的基岩 UUID |

## 使用说明

- 在线玩家上下文下，变量会优先读取当前真实生效身份。
- 离线玩家上下文下，变量会尽量使用数据库记录解析。
- 如果只是统计人数，优先使用全局变量。
- 如果某个玩家当前没有命中档案，`profile_*` 变量会返回空字符串。
