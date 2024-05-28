FROM node:18-alpine

WORKDIR /backend
# RUN rm -rf node_modules
# COPY package*.json ./
RUN npm install -g nodemon
# RUN npm install

# COPY . .

EXPOSE 3001

CMD ["npm", "start"]