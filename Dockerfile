FROM node:20-alpine AS builder

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install --global corepack@latest
RUN corepack enable && corepack use pnpm

RUN node -v && corepack -v && pnpm -v

RUN pnpm install && pnpm build

FROM node:20-alpine AS runner

WORKDIR /app

EXPOSE 3000

CMD ["pnpm", "start"]