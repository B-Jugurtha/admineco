import NextAuth, { type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/server/db/client';
import { env } from '@/env/server.mjs';
import { redirect } from 'next/dist/server/api-utils';

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
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
