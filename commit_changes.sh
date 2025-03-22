#!/bin/bash

# Make the script executable
# chmod +x commit_changes.sh

echo "Committing changes..."
git commit -m "Remove files listed in .gitignore"

echo "Showing status..."
git status

echo ""
echo "Changes have been committed!"
echo "To push these changes to the remote repository, run: git push" 