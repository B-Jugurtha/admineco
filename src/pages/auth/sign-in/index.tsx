import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getProviders, signIn } from 'next-auth/react';

export const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div
      className="p-2 flex flex-col items-center justify-center"
      style={{ height: 'calc(100vh - 100px' }}
    >
      <div className="prose text-center w-full">
        <h2>Connexion</h2>
      </div>

      {providers
        ? Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className="btn" onClick={() => signIn(provider.id)}>
                Se connecter avec {provider.name}
              </button>
            </div>
          ))
        : ''}
    </div>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;
