import { createProtectedRouter } from './protected-router';

// Example router with queries that can only be hit if the user requesting is signed in
export const userRouter = createProtectedRouter()
  .query('getRole', {
    async resolve({ ctx }) {
      const userResponse = await ctx.prisma.user.findFirst({
        where: { id: ctx.session.user.id },
        select: { role: true },
      });
      console.log(userResponse);
      return userResponse?.role;
    },
  })
  .query('getUserInfos', {
    async resolve({ ctx }) {
      if (typeof window !== 'undefined') {
        console.log('get userinfo from client');
      } else {
        console.log('get userinfo from server');
      }
      const userResponse = await ctx.prisma.user.findFirst({
        where: { id: ctx.session.user.id },
      });

      return userResponse;
    },
  });
