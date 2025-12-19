@echo off
echo Installing dependencies for Venkata Siva Chary Portfolio...
echo.

echo Installing frontend dependencies...
npm install

echo.
echo Installing backend dependencies...
cd backend
npm install
cd ..

echo.
echo Creating environment file...
copy backend\env.example backend\.env

echo.
echo Installation complete!
echo.
echo To start the development server:
echo 1. Run: npm start (for frontend)
echo 2. Run: cd backend && npm start (for backend)
echo.
echo Don't forget to configure your email settings in backend\.env
echo.
pause








