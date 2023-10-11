FROM node:20

WORKDIR /backend 

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
COPY ./pnpm-workspace.yaml ./
COPY ./tsconfig.json ./
COPY ./turbo.json ./

COPY ./packages ./packages
COPY ./apps/api/ ./apps/api

RUN npx pnpm install

WORKDIR /backend/apps/api/
RUN npx prisma generate

WORKDIR /backend

CMD ["npx", "pnpm", "turbo", "run", "dev"]
# CMD ["sleep", "36000"]