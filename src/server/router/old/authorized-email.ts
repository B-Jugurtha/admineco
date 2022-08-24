import { createProtectedRouter } from './protected-router';

// Example router with queries that can only be hit if the user requesting is signed in
export const authorizedEmailsRouter = createProtectedRouter().query(
  'getAuthorizedEmails',
  {
    async resolve({ ctx }) {
      const allowedEmailsResponse = await ctx.prisma.allowedEmails.findMany({
        select: { email: true },
      });
      return allowedEmailsResponse;
    },
  }
);
