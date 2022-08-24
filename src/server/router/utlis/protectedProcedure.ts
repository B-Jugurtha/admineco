import { trpc } from '@/utils/trpc';
import { TRPCError } from '@trpc/server';
import { t } from '../trpc';
import { createContext } from '../trpc/context';

const isProtected = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

export const protectedProcedure = t.procedure.use(isProtected);
