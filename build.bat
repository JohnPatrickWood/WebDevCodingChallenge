@echo off

start cmd /k "cd backend && npm install && npm run build"
start cmd /k "cd frontend && npm install && npm run build"
