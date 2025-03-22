#!/bin/bash

# Make the script executable
# chmod +x cleanup_git.sh

echo "Starting Git repository cleanup..."

# Stage the .gitignore file first
git add .gitignore

# Remove all files from the Git index
echo "Removing all files from Git index..."
git rm -r --cached .

# Re-add all files respecting the new .gitignore
echo "Re-adding files to Git index (respecting .gitignore)..."
git add .

# Show what would be committed
echo "Here are the files that would be committed:"
git status

echo ""
echo "Cleanup complete! The changes are staged but not committed."
echo "To commit these changes, run: git commit -m 'Remove files listed in .gitignore'"
echo "To cancel, run: git reset" 