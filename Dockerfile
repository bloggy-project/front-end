# Stage 1: Build the application
FROM node:18.17.0-alpine3.17 AS build
WORKDIR /app

COPY package.json .
RUN npm install --only=prod --legacy-peer-deps yarn \
yarn install

COPY . .
RUN yarn build

# Stage 2: Create the final image
FROM node:18.17.0-alpine3.17
WORKDIR /app

# COPY --from=build /app/package.json ./
# build 스테이지에서 ./next 와 ./public만 복사해오기
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

CMD [ "yarn", "start" ]
