#!/bin/bash

# Ober Boys High School - Netlify Deployment Script
echo "🚀 Starting deployment process for Ober Boys High School..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Running type checking..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for Netlify deployment!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Connect your GitHub repository to Netlify"
    echo "2. Set build command: npm run build"
    echo "3. Set publish directory: dist"
    echo "4. Add environment variables if needed:"
    echo "   - VITE_SUPABASE_URL"
    echo "   - VITE_SUPABASE_ANON_KEY"
    echo ""
    echo "🎉 Your school website is ready to go live!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
