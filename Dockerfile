FROM node:lts-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package.json .
RUN npm install

FROM base AS build
COPY . .
RUN npx prisma generate 
RUN npm run build

