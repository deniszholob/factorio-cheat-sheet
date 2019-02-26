#!/bin/bash
# Website build script
# @author Denis Zholob (deniszholob.com)
#
# Calls updateDate script
# Run npm build
# ====================================== #

echo 'Build Script Started ...'
sh ./build-scripts/update-date.sh
echo 'Running npm build script ...'
npm run build
ls -al "public"
echo 'Build script finished...'
