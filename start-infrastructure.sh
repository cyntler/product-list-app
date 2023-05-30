#!/bin/sh
NODE_VERSION=$(cat .nvmrc | grep -o -E '[0-9]+')
echo "[node $NODE_VERSION] starting infrastructure..."
cp .env.example .env
docker-compose build --build-arg NODE_VERSION=$NODE_VERSION
docker-compose up
