FROM node:20 AS build

WORKDIR /app

COPY package*.json ./app

RUN yarn install

COPY . /app/

EXPOSE 3000

CMD ["yarn", "start"]
