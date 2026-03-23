---
title: 部署指南
---

## 运行条件

- Java 8 或更高
- 支持 Bukkit API 的服务端
- Minecraft `1.12+`

目标兼容环境：

- Paper / Spigot / Bukkit 系
- Folia
- 具备 Bukkit API 的混合端

## 可选依赖

| 组件 | 是否必须 | 作用 |
| --- | --- | --- |
| PlaceholderAPI | 否 | 启用 `%matrixauth_*%` 变量 |
| ProtocolLib | 否 | 补强正版快速登录链路 |
| AuthMe | 否 | 与已有认证流程协同 |
| Geyser / Floodgate | 否 | 基岩版识别与身份兼容 |
| EasyBot | 否 | QQ 群查询档案 |

## 安装步骤

1. 将插件 jar 放进服务器 `plugins/` 目录。
2. 启动一次服务器，生成默认配置并触发精简版依赖下载。
3. 按需修改 `config.yml`、`messages.yml`、`settings/guide.yml`、`settings/easybot.yml`。
4. 重启服务器，或使用 `/matrixauth admin reload` 重载配置。

首次启动后通常会生成：

```text
plugins/MatrixAuth/
├─ config.yml
├─ messages.yml
└─ settings/
   ├─ guide.yml
   └─ easybot.yml
```

## 精简版首次启动

由于当前是精简发行，首次启动时会按需下载这些运行库：

- Gson
- HikariCP
- SQLite JDBC 驱动
- MySQL JDBC 驱动

注意事项：

- 首次启动会比普通版本慢一些。
- 离线服务器需要先在联网环境启动一次。
- 如果你只使用 SQLite，MySQL 驱动不会在数据库初始化阶段被主动触发。

## 默认 SQLite 部署

默认无需改动即可使用 SQLite：

```yaml
storage:
  type: SQLITE
  sqlite:
    file: "data/matrixauth.db"
```

数据库文件会在插件数据目录下创建。

## 切换到 MySQL

```yaml
storage:
  type: MYSQL
  mysql:
    host: "127.0.0.1"
    port: 3306
    database: "matrixauth"
    username: "root"
    password: "change-me"
    properties: "useSSL=false&useUnicode=true&characterEncoding=utf8&serverTimezone=UTC"
  pool:
    maximum-pool-size: 4
    minimum-idle: 1
    connection-timeout-ms: 10000
```

## 源码构建

插件主工程位于 `MatrixAuth/Code`：

```powershell
cd D:\Matrix\MatrixAuth\Code
.\gradlew.bat build
```
