@echo off
REM Ober Boys High School - Netlify Deployment Script for Windows

echo 🚀 Starting deployment process for Ober Boys High School...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the project root.
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm ci

REM Run type checking and build
echo 🔍 Running build...
call npm run build

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo 🌐 Ready for Netlify deployment!
    echo.
    echo 📋 Next steps:
    echo 1. Connect your GitHub repository to Netlify
    echo 2. Set build command: npm run build
    echo 3. Set publish directory: dist
    echo 4. Add environment variables if needed:
    echo    - VITE_SUPABASE_URL
    echo    - VITE_SUPABASE_ANON_KEY
    echo.
    echo 🎉 Your school website is ready to go live!
) else (
    echo ❌ Build failed. Please check the errors above.
    pause
    exit /b 1
)

pause
