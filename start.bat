@echo off
echo ========================================
echo    Sant Portal - Maharashtra Saints
echo ========================================
echo.

echo Checking if node_modules exists...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting MongoDB...
echo Please make sure MongoDB is running in another terminal!
echo If not, press Ctrl+C and run 'mongod' first.
echo.
pause

echo.
echo Starting the server...
echo.
echo Visit: http://localhost:3000
echo Admin: http://localhost:3000/login
echo.

node app.js
