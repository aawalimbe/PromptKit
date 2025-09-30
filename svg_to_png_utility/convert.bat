@echo off
REM PromptKit SVG to PNG Converter
REM Simple batch file to run the converter

echo PromptKit SVG to PNG Converter
echo ===============================

REM Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed or not in PATH
    echo Please install Python from https://python.org
    pause
    exit /b 1
)

REM Run the converter
echo Converting SVG files to PNG...
python convert_svgs.py --dpi 300

echo.
echo Conversion complete!
pause
