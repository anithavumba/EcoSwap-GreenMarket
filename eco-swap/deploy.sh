#!/bin/bash

# Navigate to the project directory
cd /home/EcoSwap-GreenMarket/eco-swap

# Build the React app
sudo npm run build

# Install the Netlify CLI globally if not already installed
sudo npm install -g netlify-cli

# Log in to Netlify (you'll need to do this only once)
sudo netlify login

# Deploy the app to Netlify
sudo netlify deploy --prod
