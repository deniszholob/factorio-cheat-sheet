#!/bin/bash
# Website build script
# @author Denis Zholob (deniszholob.com)
#
# * Runs app build script
#   * Calls date-patch script
# * Creates 404.html from index.html
# ====================================== #
echo ' -- Build Script Started ...'
set -e  # Exit immediately if a command exits with a non-zero status

echo ' -- Running app build script'
pnpm run build:prod

# https://angular.io/guide/deployment#deploy-to-github-pages
echo ' -- Copy index.html to 404.html'
cp public/index.html public/404.html

echo ' -- Build contents'
ls -alR "public"

echo ' -- Build script finished ...'
