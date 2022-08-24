// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { protectedExampleRouter } from './protected-example-router';
import { userRouter } from './user';
import { authorizedEmailsRouter } from './authorized-email';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('question.', protectedExampleRouter)
  .merge('user.', userRouter)
  .merge('authorizedEmails.', authorizedEmailsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
