FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# --- Build ---
FROM base AS builder

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/web/package.json ./apps/web/package.json
COPY packages/ui-kit/package.json ./packages/ui-kit/package.json
COPY packages/configs/eslint-config/package.json ./packages/configs/eslint-config/package.json
COPY packages/configs/stylelint-config/package.json ./packages/configs/stylelint-config/package.json
COPY packages/configs/prettier-config/package.json ./packages/configs/prettier-config/package.json

RUN pnpm install --frozen-lockfile

COPY . .

ENV ENVIRONMENT=docker
RUN pnpm --filter @wish/web build

# --- Production image ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/web/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "apps/web/server.js"]
