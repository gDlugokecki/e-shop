FROM node:20

WORKDIR /frontend 

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
COPY ./pnpm-workspace.yaml ./
COPY ./tsconfig.json ./
COPY ./turbo.json ./

COPY ./packages ./packages
COPY ./apps/web/ ./apps/web/


RUN npx pnpm install

# CMD ["sleep", "36000000"]
CMD ["npx", "pnpm", "turbo", "run", "dev"]