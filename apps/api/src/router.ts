import { productRouter } from "./routers/product";
import { orderRouter } from "./routers/order";
import { router } from "./trpc";

export const appRouter = router({
  product: productRouter,
  order: orderRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
