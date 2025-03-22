#!/bin/bash

# Make the script executable
# chmod +x fix_git_repository.sh

echo "===== STARTING GIT REPOSITORY CLEANUP ====="

# Step 1: Stage only the .gitignore file first
echo "1. Adding .gitignore to staging..."
git add .gitignore

# Step 2: Remove all files from the Git index
echo "2. Removing all files from Git index..."
git rm -r --cached .

# Step 3: Re-add all files respecting the new .gitignore
echo "3. Re-adding files to Git index (respecting .gitignore)..."
git add .

# Step 4: Commit the changes
echo "4. Committing changes..."
git commit -m "Remove files listed in .gitignore and clean up repository"

# Step 5: Show status
echo "5. Showing current git status..."
git status

echo ""
echo "===== CLEANUP COMPLETE! ====="
echo "Files that should be ignored (like .next directory, node_modules, etc.) are now removed from tracking."
echo "Your repository is now clean and follows best practices."
echo ""
echo "To push these changes to the remote repository, run: git push" 