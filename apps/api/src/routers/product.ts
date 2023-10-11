import prisma from "../prisma";
import { publicProcedure, router } from "../trpc";

export const productRouter = router({
  getProducts: publicProcedure.query(async (opts) => {
    const products = await prisma.product.findMany();
    return products;
  }),
});
// export type definition of API
export type AppRouter = typeof productRouter;
