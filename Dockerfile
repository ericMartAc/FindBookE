FROM node:12.18.0
MAINTAINER eric martinez "eamartinez.acelas@outlook.com"

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
