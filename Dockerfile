FROM node:20-alpine AS builder

# Install dependencies for native modules
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files first for better caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/*/package.json ./packages/*/

# Install pnpm globally and enable it
RUN npm install --global corepack@latest
RUN corepack enable

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Install dependencies for production
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/*/package.json ./packages/*/

# Install pnpm and production dependencies
RUN npm install --global corepack@latest
RUN corepack enable
RUN pnpm install --frozen-lockfile --prod

# Copy built application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Use pnpm start instead of npm start
CMD ["pnpm", "start"]