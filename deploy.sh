#!/bin/bash

# Install Vercel CLI if not already installed
if ! command -v vercel &> /dev/null; then
  echo "Installing Vercel CLI..."
  npm install -g vercel
fi

# Install project dependencies
echo "Installing project dependencies..."
npm install

# Build the project for web
echo "Building for web..."
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment complete! Your app is now live at the URL provided above."
