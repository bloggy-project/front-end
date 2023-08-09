FROM node:18.17.0-alpine3.17 AS build
WORKDIR /app

COPY package.json .
RUN npm install --only=prod --legacy-peer-deps yarn \
yarn install

COPY . .
RUN yarn build

CMD [ "yarn", "start" ]
