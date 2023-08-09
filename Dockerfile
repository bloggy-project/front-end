# Stage 1: Build the application
FROM node:18.17.0-alpine3.17 AS build
WORKDIR /app

COPY package.json .
RUN npm install --legacy-peer-deps yarn \
yarn install

COPY . .
RUN yarn build

# Stage 2: Create the final image
FROM node:18.17.0-alpine3.17
WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

RUN npm install --only=prod --legacy-peer-deps

CMD [ "yarn", "start" ]
