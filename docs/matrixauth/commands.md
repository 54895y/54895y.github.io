---
title: 命令说明
---

## 玩家命令

玩家可用入口：

- `/matrixauth`
- `/account`
- `/ma`
- `/mauth`

主要子命令：

| 命令 | 说明 |
| --- | --- |
| `/matrixauth` | 查看当前账号状态 |
| `/matrixauth help` | 查看帮助页 |
| `/matrixauth guide` | 查看玩家向导 |
| `/matrixauth premium` | 切换基础默认模式到正版 |
| `/matrixauth offline` | 切换基础默认模式到离线 |
| `/matrixauth bedrock` | 切换基础默认模式到基岩 |
| `/matrixauth create ＜名称＞` | 创建新档案 |
| `/matrixauth delete ＜档案ID＞` | 删除自己的档案 |
| `/matrixauth profiles` | 查看自己的档案列表 |
| `/matrixauth profile ＜档案ID＞` | 查看档案详情 |
| `/matrixauth link ＜档案ID＞ ＜类型＞ [名称] [UUID]` | 为档案补绑账号 |
| `/matrixauth switch ＜档案ID＞ ＜类型＞` | 切换档案当前生效账号 |

说明：

- `类型` 只能是 `premium`、`offline`、`bedrock`。
- 档案切换后会踢出玩家，要求重新进入。
- Java 玩家在聊天栏里可以直接点击帮助页和档案列表动作。
- 基岩玩家默认只收到纯指令提示。

## `/matrixauth link`

这个命令有两种使用方式。

绑定当前登录身份：

```text
/matrixauth link 1 premium
```

手动指定名称和 UUID：

```text
/matrixauth link 1 premium Steve 8667ba71-b85a-4004-af54-457a9734eed7
```

手动指定方式需要权限：

- `matrixauth.account.manual-link`

## 管理员命令

管理员统一走：

- `/matrixauth admin ...`

权限：

- `matrixauth.admin`
- 兼容旧权限 `advancedlogin.admin`

管理员子命令：

| 命令 | 说明 |
| --- | --- |
| `/matrixauth admin set ＜玩家＞ ＜premium\|offline\|bedrock＞` | 强制修改玩家基础默认模式 |
| `/matrixauth admin info ＜玩家＞` | 查看玩家基础数据 |
| `/matrixauth admin profile list ＜玩家＞` | 查看该玩家名下全部档案 |
| `/matrixauth admin profile info ＜档案ID＞` | 查看指定档案详情 |
| `/matrixauth admin profile create ＜玩家＞ ＜档案名＞ ＜类型＞ ＜账号名＞ [UUID]` | 为目标玩家创建档案 |
| `/matrixauth admin profile link ＜档案ID＞ ＜类型＞ ＜账号名＞ [UUID]` | 强制给档案绑定账号 |
| `/matrixauth admin profile switch ＜档案ID＞ ＜类型＞` | 强制切换档案生效账号 |
| `/matrixauth admin profile delete ＜档案ID＞` | 删除指定档案 |
| `/matrixauth admin reload` | 重载配置和服务 |

## 旧命令说明

旧的 `/advancedlogin` 已经移除，不再作为有效入口。文档、帮助和管理功能都应以 `/matrixauth` 为准。
