FROM node:18-alpine
WORKDIR /backend
COPY . .
RUN rm -rf node_modules
RUN npm install
CMD ["node", "server.js"]
EXPOSE 3001