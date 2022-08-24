import { getTheAuthSession } from '@/server/common/get-server-session';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';

type Props = {};

const Stock = (props: Props) => {
  return <div>Stock</div>;
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
export default Stock;
