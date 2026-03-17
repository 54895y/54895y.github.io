@echo off
echo ========================================
echo   MatrixShop 文档 - GitHub 部署脚本
echo ========================================
echo.

echo [1/6] 检查 Git 状态...
git status
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo 错误: 这不是一个 Git 仓库！
    echo.
    echo 正在初始化 Git 仓库...
    git init
    echo.
    echo 请配置 Git 用户信息:
    echo git config --global user.name "你的用户名"
    echo git config --global user.email "你的邮箱"
    echo.
    pause
    exit /b 1
)

echo.
echo [2/6] 添加所有文件到暂存区...
git add .
echo 已添加所有文件

echo.
echo [3/6] 检查提交状态...
git status

echo.
echo [4/6] 提交更改...
set /p commitMsg="请输入提交信息 (按回车使用默认信息): "
if "%commitMsg%"=="" set commitMsg="Update documentation"
git commit -m "%commitMsg%"
if %ERRORLEVEL% NEQ 0 (
    echo 没有更改需要提交
)

echo.
echo [5/6] 检查远程仓库...
git remote -v
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo 错误: 未配置远程仓库！
    echo.
    echo 请先创建 GitHub 仓库: https://github.com/new
    echo 仓库名称: 54895y.github.io
    echo.
    echo 然后运行以下命令:
    echo git remote add origin https://github.com/54895y/54895y.github.io.git
    echo git branch -M main
    echo git push -u origin main
    echo.
    pause
    exit /b 1
)

echo.
echo [6/6] 推送到 GitHub...
echo 正在推送到 main 分支...
git push origin main

echo.
echo ========================================
echo   部署完成！
echo ========================================
echo.
echo 等待 2-5 分钟让 GitHub Pages 部署完成
echo 然后访问: https://54895y.github.io
echo.
echo 如果遇到问题，请查看 DEPLOYMENT_GUIDE.md
echo.
pause
