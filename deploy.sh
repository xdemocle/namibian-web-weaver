#!/bin/bash
# LizWise Website Deployment Script

echo "🚀 Starting deployment process for LizWise website..."

# Build the project using the tech stack defined in user rules
echo "📦 Building the project with Vite..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "❌ Build failed! Aborting deployment."
  exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to Cloudflare
echo "☁️ Deploying to Cloudflare..."
npx wrangler deploy

# Check if deployment was successful
if [ $? -ne 0 ]; then
  echo "❌ Deployment failed! Please check the error messages above."
  exit 1
fi

echo "✅ Deployment completed successfully!"

# Wait a moment for the worker to initialize
echo "⏳ Waiting for worker initialization..."
sleep 3

# Trigger cache purge
echo "🧹 Purging Cloudflare cache..."
PURGE_URL="https://lizwise.online/admin/purge-cache"
PURGE_RESPONSE=$(curl -s "$PURGE_URL")

echo "📝 Cache purge response: $PURGE_RESPONSE"
echo "✨ Deployment process completed!"
echo "🌐 Your site is live at https://lizwise.online"
