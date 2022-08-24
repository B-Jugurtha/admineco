import { getTheAuthSession } from '@/server/common/get-server-session';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

type Props = {};

const Accounting = (props: Props) => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return <p>Signed in as {session.user?.email}</p>;
  }

  return <Link href={'/api/auth/signin'}>Sign in</Link>;
};
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getTheAuthSession(ctx);
  if (!session) {
    return {
      redirect: { destination: '/auth/sign-in', permanent: false },
    };
  }
  return {
    props: {
      session,
    },
  };
};
export default Accounting;
