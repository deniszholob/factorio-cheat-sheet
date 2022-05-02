#!/bin/bash
# Update Date Script
# @author Denis Zholob (deniszholob.com)
#
# Writes the current date to file
# Ref: https://renenyffenegger.ch/notes/Linux/shell/commands/date
# ====================================== #

echo 'Update Date script started...'
now="$(date -I)"
file="src/app/app-update.ts"
file_comment="// Auto Generated during deployment build //\n"
file_content="export const APP_UPDATE_DATE = '%s';\n"
printf "$file_comment$file_content" "$now" > $file
echo "$now"
echo 'Update Date script finished...'
