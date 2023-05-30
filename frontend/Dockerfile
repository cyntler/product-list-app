ARG NODE_VERSION=19
FROM node:$NODE_VERSION-alpine
ENV FRONTEND_PORT 3001

WORKDIR /frontend
COPY package*.json .
RUN npm i && npm i -D @swc/core
COPY . .

EXPOSE $FRONTEND_PORT
CMD npm i -D @swc/core && npm rebuild esbuild && npm start
