ARG NODE_VERSION=19
FROM node:$NODE_VERSION-alpine
ENV BACKEND_PORT 3000

WORKDIR /backend
COPY package*.json .
RUN npm i
COPY . .
RUN npm run lint

EXPOSE $BACKEND_PORT
CMD npm rebuild esbuild && npm start
