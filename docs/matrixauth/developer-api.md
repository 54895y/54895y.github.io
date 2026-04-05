---
title: MatrixAuth 开发者 API
description: MatrixAuth 当前开发者入口、代码树与 Javadoc 生成方式。
---

# MatrixAuth 开发者 API

MatrixAuth 当前没有单独拆分稳定 `api/` 包，开发者文档应优先参考这些分层：

- `MatrixAuth`
- `command/`
- `config/`
- `data/`
- `hook/`
- `service/`
- `util/`

## 代码树

```text
src/main/kotlin/com/y54895/matrixauth/
├─ MatrixAuth.kt
├─ auth/
├─ command/
├─ config/
├─ data/
├─ hook/
├─ listener/
├─ metrics/
├─ service/
└─ util/
```

## 生成 Javadoc

```bash
cd /www/codex-work/MatrixAuth
bash ./gradlew generateJavadoc
```

输出目录：

```text
build/dokka/javadoc/
build/libs/MatrixAuth-<version>-javadoc.jar
```
