#!/bin/bash

# Build the backend
cd backend
npm install
npm run build

# Build the frontend
cd ../frontend
npm install
npm run build
