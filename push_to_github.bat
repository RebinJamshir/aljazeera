@echo off
title Push to GitHub - Afrah Al Jazeera
echo ======================================================
echo Pushing Afrah Al Jazeera Auto Spare Parts to GitHub...
echo Repository: https://github.com/RebinJamshir/aljazeera.git
echo ======================================================
echo.

git branch -M main
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ======================================================
    echo SUCCESS: Project pushed to GitHub successfully!
    echo ======================================================
) else (
    echo.
    echo If GitHub rejected because of an existing README, trying force push...
    git push -u origin main --force
)

echo.
pause
