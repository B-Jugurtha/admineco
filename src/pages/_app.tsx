// src/pages/_app.tsx
import type { AppType } from 'next/dist/shared/lib/utils';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import Layout from '../components/layout/index';
import { trpc } from '@/utils/trpc';

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);

// export default withTRPC<AppRouter>({
//   config() {
//     /**
//      * If you want to use SSR, you need to use the server's full URL
//      * @link https://trpc.io/docs/ssr
//      */
//     const url = `${getBaseUrl()}/api/trpc`;

//     return {
//       url,
//       transformer: superjson,
//       links: [
//         // adds pretty logs to your console in development and logs errors in production
//         loggerLink({
//           enabled: (opts) =>
//             process.env.NODE_ENV === 'development' ||
//             (opts.direction === 'down' && opts.result instanceof Error),
//         }),
//         httpBatchLink({
//           url: `${getBaseUrl()}/api/trpc`,
//         }),
//       ],
//       queryClientConfig: {
//         defaultOptions: {
//           queries: {
//             // refetchOnMount: false,
//             refetchOnWindowFocus: false,
//           },
//         },
//       },
//       /**
//        * @link https://react-query.tanstack.com/reference/QueryClient
//        */
//       // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
//     };
//   },
//   /**
//    * @link https://trpc.io/docs/ssr
//    */
//   ssr: false,
// })(MyApp);
