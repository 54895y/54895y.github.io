---
title: MatrixAuth 开发者 API
description: MatrixAuth 当前开发者入口、代码树与 Javadoc 生成方式。
---

# MatrixAuth 开发者 API

MatrixAuth 当前稳定公开层：

- `com.y54895.matrixauth.api`
- `com.y54895.matrixauth.api.model`

内部代码主要仍按这些分层组织：

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
├─ api/
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
