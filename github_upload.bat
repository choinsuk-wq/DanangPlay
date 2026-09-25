@echo off
chcp 65001 > nul
title DanangPlay 깃허브 자동 업로드

echo ========================================================
echo       [DanangPlay] 깃허브(GitHub) 자동 업로드
echo ========================================================
echo.

echo [1/3] 변경된 파일 확인 중...
git status -s
echo.

echo [2/3] 변경 사항을 스테이징에 추가 중...
git add .
echo.

set commit_msg=사이트 업데이트 및 수정 (%date% %time%)
set /p user_msg="커밋 메시지를 입력하세요 (엔터 시 기본 메시지 적용): "
if not "%user_msg%"=="" set commit_msg=%user_msg%

echo.
echo [3/3] 커밋 생성 및 깃허브(main 브랜치) 전송 중...
git commit -m "%commit_msg%"
git push origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   성공: 깃허브에 최신 코드가 안전하게 업로드되었습니다!
    echo ========================================================
) else (
    echo ========================================================
    echo   실패: 업로드 중 오류가 발생했습니다. 네트워크를 확인해주세요.
    echo ========================================================
)
echo.
pause
