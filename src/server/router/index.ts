// appRouter
import { userRouter } from './subRoutes/user';
import { helloRouter } from './subRoutes/hello';
import { t } from './trpc';

export const appRouter = t.router({
  hello: helloRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
