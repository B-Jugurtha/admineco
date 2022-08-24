import { t } from '../trpc';
import { protectedProcedure } from '../utlis/protectedProcedure';

export const userRouter = t.router({
  getUserInfo: protectedProcedure.query(async ({ ctx }) => {
    const userResponse = await ctx.prisma?.user.findFirst({
      where: { id: ctx.session.user.id },
    });

    return userResponse;
  }),
});
