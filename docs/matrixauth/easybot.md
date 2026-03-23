---
title: EasyBot 对接
---

## 定位

MatrixAuth 当前的 EasyBot 兼容层只负责查询和展示，不负责存档。

数据流：

1. QQ 消息进入 EasyBot 扩展。
2. EasyBot 根据 QQ 绑定玩家信息向 MatrixAuth 发起 HTTP 查询。
3. MatrixAuth 从自己的数据库返回档案信息。
4. EasyBot 输出文本或图片模板结果。

## 插件侧配置

文件位置：

```text
plugins/MatrixAuth/settings/easybot.yml
```

默认内容：

```yaml
enabled: false
host: "127.0.0.1"
port: 26992
token: "matrixauth-easybot-token"
```

只有 `enabled: true` 时，插件才会启动 EasyBot HTTP 服务。

## EasyBot 侧关键配置

扩展会用到的核心配置：

- `plugin.base-url`
- `plugin.token`
- `image.enabled`
- `image.timeout-seconds`
- `image.template-index-file`

其中：

- `plugin.base-url` 必须和插件侧 `host + port` 对应。
- `plugin.token` 必须和插件侧 `token` 一致。
- 如果 EasyBot 和 MC 不在同一台机器上，不要继续使用 `127.0.0.1`。

## HTTP 接口

健康检查：

```http
GET /api/easybot/health
```

档案查询：

```http
POST /api/easybot/profile/list?token=<token>
X-MatrixAuth-Token: <token>
Content-Type: application/json
```

请求体示例：

```json
{
  "players": [
    {
      "name": "Steve",
      "uuid": "8667ba71-b85a-4004-af54-457a9734eed7"
    }
  ]
}
```

## 群聊触发词

当前扩展支持：

- `我的档案`
- `档案列表`
- `档案信息 ＜ID＞`

如果启用了白名单模式，EasyBot 会优先尝试从它自己的玩家绑定记录里反查对应 Minecraft 玩家，再向 MatrixAuth 查询档案。

## 图片模板

图片模板工程和 EasyBot 扩展已经从主插件分支拆出去，放在 GitHub 仓库的 `codex/easybot-assets` 分支。

主插件分支 `main` 只保留 `Code/`。

## 常见失败点

- 插件侧 `settings/easybot.yml` 没开启。
- `plugin.base-url` 和插件监听地址不一致。
- `token` 不一致。
- EasyBot 访问的是错误的本机地址。
- 玩家虽然绑定了 QQ，但 MatrixAuth 数据库里还没有真正创建档案。
