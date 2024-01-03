@echo off
(   
    echo "Installing Cypress..."
    call npm install cypress
)

(   
    echo "Installing Cypress XPATH Support..."
    call npm install -D cypress-xpath
)

echo "All packagens installed successfully"
timeout 15