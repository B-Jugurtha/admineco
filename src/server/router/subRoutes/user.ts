import { t } from '../trpc';
import { isAdminProcedure } from '../utlis/isAdminProcedure';
import { isAuthenticatedProcedure } from '../utlis/isAuthenticatedProcedure';

export const userRouter = t.router({
  // getSessionUserInfo: isAuthenticatedProcedure.query(async ({ ctx }) => {
  //   const userResponse = await ctx.prisma?.user.findFirst({
  //     where: { id: ctx.session.user.id },
  //   });

  //   return userResponse;
  // }),
  getAllUsers: isAdminProcedure.query(async ({ ctx }) => {
    const userResponse = await ctx.prisma?.user.findMany();

    return userResponse;
  }),
  getAllClients: isAdminProcedure.query(async ({ ctx }) => {
    const userResponse = await ctx.prisma?.user.findMany({
      where: { role: 'Client' },
    });

    return userResponse;
  }),
});
