#!/bin/bash

# Navigate to the project directory
cd /home/EcoSwap-GreenMarket/eco-swap

# Build the React app
npm run build

# Install the Netlify CLI globally if not already installed
npm install -g netlify-cli

# Log in to Netlify (you'll need to do this only once)
netlify login

# Deploy the app to Netlify
netlify deploy --prod
