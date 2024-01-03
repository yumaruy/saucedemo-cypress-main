@echo off
(   
    echo "Updating all packages..."
    call npx npm-check-updates -u
)

echo "All packages updated"
timeout 10