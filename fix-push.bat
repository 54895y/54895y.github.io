@echo off
echo ========================================
echo   解决 Git Push 冲突问题
echo ========================================
echo.

echo 当前 Git 状态:
git status
echo.

echo 远程仓库信息:
git remote -v
echo.

echo [方案 1] 拉取远程更改并合并
echo.
echo 正在拉取远程更改...
git pull origin main --allow-unrelated-histories

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo 拉取失败，尝试方案 2: 强制推送
    echo.
    echo 警告: 这将覆盖远程仓库的内容
    set /p confirm="是否继续？(输入 yes 确认): "
    if /i "%confirm%"=="yes" (
        git push -f origin main
    ) else (
        echo 操作已取消
        pause
        exit /b 1
    )
) else (
    echo.
    echo 拉取成功，正在推送...
    git push -u origin main
)

echo.
echo ========================================
echo   操作完成！
echo ========================================
pause
