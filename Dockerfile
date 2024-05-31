FROM node:lts-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package.json .
RUN npm install

FROM base AS build
COPY . .
RUN npx prisma generate 
RUN npm run build


FROM base AS production
ENV NODE_ENV=production
ENV DATABASE_URL="file:./quran.db"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs



COPY --from=build --chown=nextjs:nodejs /app/.next ./.next
COPY --from=build --chown=nextjs:nodejs prisma ./prisma 
COPY --from=build --chown=nextjs:nodejs /app/public ./public

RUN npx prisma generate 
EXPOSE 3000
CMD [ "npm", "start" ]


