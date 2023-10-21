# Using an official Node.js runtime as the base image
FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Building the React app
RUN npm run build

# Exposing port the app will run on
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
