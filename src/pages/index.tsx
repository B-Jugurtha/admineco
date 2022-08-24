import { getTheAuthSession } from '@/server/common/get-server-session';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import Head from 'next/head';

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <div>Dashboard</div>
    </>
  );
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

export default Home;
