@echo off
(   
    echo "Opening Cypress..."
    call npx cypress open
)

echo "Opening Cypress... Wait Please"
timeout 10