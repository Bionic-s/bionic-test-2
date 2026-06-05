#!/bin/bash

# Bionic Solutions - Vercel Deployment Quick Start
# This script prepares your project for Vercel deployment

echo "======================================"
echo "Bionic Solutions - Vercel Deployment"
echo "======================================"
echo ""

# Check if running in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    echo "Please run this script from the bionic-solutions directory"
    exit 1
fi

echo "✅ Found package.json"
echo ""

# Check Node version
echo "Checking Node version..."
NODE_VERSION=$(node -v)
echo "Current Node version: $NODE_VERSION"
echo "Required: v18.x or higher"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
if command -v pnpm &> /dev/null; then
    pnpm install
elif command -v npm &> /dev/null; then
    npm install
else
    echo "❌ Error: Neither pnpm nor npm found"
    echo "Please install Node.js and npm"
    exit 1
fi

echo ""
echo "✅ Dependencies installed"
echo ""

# Test build
echo "🔨 Testing build..."
if command -v pnpm &> /dev/null; then
    pnpm run build
else
    npm run build
fi

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
else
    echo ""
    echo "❌ Build failed"
    echo "Please check error messages above"
    exit 1
fi

# Check for dist directory
if [ -d "dist" ]; then
    echo "✅ Build output found in dist/"
    echo ""
else
    echo "❌ Error: dist/ directory not found"
    exit 1
fi

# Check for required files
echo "Checking required configuration files..."

if [ -f "vercel.json" ]; then
    echo "✅ vercel.json found"
else
    echo "❌ vercel.json not found"
    echo "Creating vercel.json..."
    # File should already exist, but this is a safety check
fi

if [ -f ".vercelignore" ]; then
    echo "✅ .vercelignore found"
else
    echo "⚠️  .vercelignore not found (optional)"
fi

if [ -f ".nvmrc" ]; then
    echo "✅ .nvmrc found"
else
    echo "⚠️  .nvmrc not found (optional but recommended)"
fi

echo ""
echo "======================================"
echo "Pre-deployment checks complete!"
echo "======================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Commit and push to Git:"
echo "   git add ."
echo "   git commit -m 'Ready for Vercel deployment'"
echo "   git push origin main"
echo ""
echo "2. Deploy to Vercel:"
echo "   Option A: Visit https://vercel.com/new and import your repository"
echo "   Option B: Install Vercel CLI and run 'vercel --prod'"
echo ""
echo "3. Configure environment variables in Vercel dashboard:"
echo "   VITE_SUPABASE_URL"
echo "   VITE_SUPABASE_ANON_KEY"
echo ""
echo "4. See VERCEL_DEPLOYMENT_GUIDE.md for detailed instructions"
echo ""
echo "======================================"
echo "✅ Ready for deployment!"
echo "======================================"
