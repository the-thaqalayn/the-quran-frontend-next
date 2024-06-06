FROM node:lts-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1
COPY package*.json .
# RUN npm ci

FROM base AS build
COPY . .
RUN npx prisma generate
RUN npx prisma db push
RUN npm run prisma:seed
RUN npm run build


FROM base AS production
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=build --chown=nextjs:nodejs /app/.next ./.next
COPY --from=build --chown=nextjs:nodejs /app/prisma/schema.prisma ./prisma/schema.prisma 
COPY --from=build --chown=nextjs:nodejs /app/public ./public

# RUN npx prisma generate 
EXPOSE 3000
CMD [ "npm", "start" ]


FROM node:lts-alpine as dev
WORKDIR /app
ENV DATABASE_URL="file:./quran.db"
ENV NODE_ENV=development
COPY . .
RUN npx prisma generate 
CMD npm run dev


