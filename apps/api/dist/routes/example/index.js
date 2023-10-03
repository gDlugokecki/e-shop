"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const example = async (fastify, opts) => {
    fastify.get("/", async function (request, reply) {
        const prisma = new client_1.PrismaClient();
        const users = await prisma.product.findMany();
        console.log(users, 'USERS');
        return "this is an example";
    });
};
exports.default = example;
//# sourceMappingURL=index.js.map