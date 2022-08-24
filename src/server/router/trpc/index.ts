import { initTRPC } from '@trpc/server';
import { Context } from './context';
import superjson from 'superjson';

export const t = initTRPC<{
  ctx: Context;
}>()({
  /* optional */
  transformer: superjson,
  // errorFormatter({ shape }) {
  //   return shape;
  // },
});
