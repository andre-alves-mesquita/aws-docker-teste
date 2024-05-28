FROM node:18-alpine
WORKDIR /frontend

# RUN rm -rf node_modules
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]