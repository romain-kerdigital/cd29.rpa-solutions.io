# Deploying to Vercel

This document provides instructions for deploying this MkDocs site on Vercel.

## Prerequisites

1. A Vercel account
2. This repository linked to your Vercel account

## Setup

1. Create a new project in Vercel and import this repository
2. Configure the following settings:
   - Framework Preset: Other
   - Build Command: pip install -r requirements.txt && mkdocs build
   - Output Directory: site
   - Install Command: pip install -r requirements.txt && npm ci

## Environment Variables

Add the following environment variables in your Vercel project settings:

- `GOOGLE_ANALYTICS_KEY`: Your Google Analytics tracking ID (optional)
- Add any other environment variables used in your MkDocs configuration

## Deployment

After configuration, Vercel will automatically deploy your MkDocs site when you push changes to your repository. The site will be built using the settings specified in `vercel.json`.

## Troubleshooting

If you encounter build issues:

1. Check the Vercel build logs
2. Ensure all required Python packages are listed in `requirements.txt`
3. Verify that the Node.js version is compatible (Vercel uses Node.js 18 by default)
4. Make sure all necessary environment variables are set 