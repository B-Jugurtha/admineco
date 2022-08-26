import { TRPCError } from '@trpc/server';
import { t } from '../trpc';

export const isAdminProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (
    ctx.session?.user?.role !== 'Admin' &&
    ctx.session?.user?.role !== 'Superadmin'
  ) {
    throw new TRPCError({ code: 'FORBIDDEN' });
  }

  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});
