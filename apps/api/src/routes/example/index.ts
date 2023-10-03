import { FastifyPluginAsync } from "fastify";
import { PrismaClient } from "@prisma/client";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const prisma = new PrismaClient();
    const products = await prisma.product.findMany();
    console.log(products);
    return "this is an example";
  });
};

export default example;
