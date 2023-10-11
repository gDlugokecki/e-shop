import { publicProcedure, router } from "../trpc";

export const orderRouter = router({
  getOrders: publicProcedure.query((opts) => {
    console.log(opts.ctx);
    // return users[opts.input]; // input type is string
    return "TRPC ORDER";
  }),
});
// export type definition of API
export type AppRouter = typeof orderRouter;
