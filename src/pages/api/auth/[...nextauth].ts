import NextAuth, { type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from '@/server/db/client';

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user = user;
        // session.user = typeof user == typeof session.user ? user : undefined;
      }
      return session;
    },
    async redirect({ baseUrl, url }) {
      return '/';
    },
    async signIn({ user, account, profile, email, credentials }) {
      // const isMailAuthorized = await prisma.allowedEmails.findFirst({
      //   where: { email: user.email ? user.email : '' },
      // });
      // console.log(isMailAuthorized);
      const isMailAuthorized = true;
      console.log('isMailAuthrized ' + isMailAuthorized);
      return isMailAuthorized ? true : '/stock';
      // if (isMailAuthorized) {
      //   return true;
      // } else {
      //   // Return false to display a default error message
      //   return '/stock';
      //   // Or you can return a URL to redirect to:
      //   // return '/unauthorized'
      // }
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
};

export default NextAuth(authOptions);
