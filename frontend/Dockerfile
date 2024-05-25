FROM node:18-alpine
WORKDIR /backend
COPY . .
RUN rm -rf node_modules
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000