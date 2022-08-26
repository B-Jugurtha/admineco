import { User as PrismaUser, Session as PrismaSession } from '@prisma/client';
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends PrismaSession {
    user?: PrismaUser;
  }
  interface User extends PrismaUser {
    name: string | null;
    image: string | null;
    email: string | null;
  }
}
